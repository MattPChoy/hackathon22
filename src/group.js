const express = require('express')
const {v4: uuid} = require('uuid')
const chalk = require('chalk')

const router = express.Router()
const group_test_router = express.Router()

const { User, Group, groups } = require('./model/Group')()

const { Chat } = require('./chat')
const { generateInviteLink } = require('./invitecodes')

group_test_router.get('/', (req, res) => {
    res.json(groups)
})

group_test_router.get('/:id', (req, res) => {
    const groupId = req.params.id
    const group = Group.getGroupById(groupId)
    res.json(group)
})

router.get('/:groupId/users', (req, res) => {
    const groupId = req.params.groupId
    const group = Group.getGroupById(groupId)
    const users = []
    for (const user in group.users) {
        users.push(
            {
                user,
                username: group.getUser(user).username,
                admin: group.admin === user
            }
        )
    }
    res.json(users)
})

// The query string at the end is of the form ?name={name}&as_user={name}
router.post('/create', (req, res) => {
    const groupName = req.query.name
    const username = req.query.as_user

    const user = new User(username)
    const userId = user.id

    const users = { [userId]: user }

    const group = new Group(groupName, users, userId)
    const chat = new Chat(group.groupId)
    group.sync().then(() => {
            res.json(
                {
                    groupName,
                    groupId: group.groupId,
                    inviteLink: generateInviteLink(group.groupId),
                    admin: {userId, username},
                    users,
                    message: 'Successfully created group'
                }
            )
        }
    ).catch((err) => {
        console.log(chalk.bgRedBright(chalk.black(`Failed to sync group to database, with error: \n ${err}`)))
        res.json(
            {
                message: 'Failed to sync group to database'
            }
        )
    })
})

// The query string at the end is of the form ?name={name}
router.post('/:groupId/join_as', (req, res) => {
    const groupId = req.params.groupId
    const username = req.query.name

    const user = new User(username)
    const userId = user.id

    const group = Group.getGroupById(groupId)
    group.addUser(user)

    group.sync().then(() => {
        res.json(
            {
                username,
                groupId,
                userId: userId,
                message: 'Successfully added user to group'
            }
        )
    }).catch((err) => {
        console.log(chalk.bgRedBright(chalk.black(`Failed to sync group to database, with error: \n ${err}`)))
        res.json(
            {
                message: 'Failed to sync group to database'
            }
        )
    })
})

// Any query string is ignored
router.delete('/:groupId/:userId', (req, res) => {
    const groupId = req.params.groupId
    const userId = req.params.userId

    const group = Group.getGroupById(groupId)
    group.removeUser(userId)
    group.sync()

    res.json(
        {
            groupId,
            userId,
            message: 'Removed user from group'
        }
    )
})

router.get('/:groupId/preferences', (req, res) => {
    const groupId = req.params.groupId
    const group = Group.getGroupById(groupId)

    const preferences = []
    for (const user in group.users) {
        const userPreferences = group.getUser(user).preferences
        for (const preference of userPreferences) {
            preferences.push(
                {
                    user,
                    preference
                }
            )
        }
    }
    res.json(preferences)
})

router.get('/:groupId/:userId/preferences', (req, res) => {
    const groupId = req.params.groupId
    const userId = req.params.userId
    const preferences = User.getUserById(groupId, userId).preferences
    res.json(preferences)
})

router.put('/:groupId/:userId/preferences/add', (req, res) => {
    const groupId = req.params.groupId
    const userId = req.params.userId
    //TODO enforce preference structure from user
    const preference = req.body
    const preferences = User.getUserById(groupId, userId).preferences
    preferences.push(preference)
    res.json(
        {
            preferences,
            message: 'Successfully added preferences'
        }
    )
})

module.exports = { group: router, group_test_router }