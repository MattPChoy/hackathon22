const express = require('express')
const {v4: uuid} = require("uuid");

const router = express.Router()
const group_test_router = express.Router()

const groups = {}

group_test_router.get('/', (req, res) => {
    res.json(groups)
})

group_test_router.get('/:id', (req, res) => {
    const groupId = req.params.id
    const group = groups[groupId]
    res.json(group)
})

router.get('/:groupId/users', (req, res) => {
    const groupId = req.params.groupId
    const group = groups[groupId]
    const users = []
    for (const user in group.users) {
        users.push(
            {
                user,
                username: group.users[user].username,
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
    const userId = uuid()
    const groupId = uuid()
    const users = { [userId]: { username, preferences: [] } }
    groups[groupId] = {
        groupName,
        groupId,
        users,
        admin: userId
    }
    res.json(
        {
            groupName,
            groupId,
            admin: {userId, username},
            users,
            message: 'Successfully created group'
        }
    )
})

// The query string at the end is of the form ?name={name}
router.post('/:groupId/join_as', (req, res) => {
    const groupId = req.params.groupId
    const username = req.query.name

    const userId = uuid()

    const group = groups[groupId]
    group.users[userId] = { username, preferences: [] }

    res.json(
        {
            username,
            groupId,
            userId: userId,
            message: 'Successfully added user to group'
        }
    )
})

// Any query string is ignored
router.delete('/:groupId/:userId', (req, res) => {
    const groupId = req.params.groupId
    const userId = req.params.userId

    const group = groups[groupId]
    group.users[userId] = undefined

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
    const group = groups[groupId]
    const preferences = []
    for (const user in group.users) {
        const userPreferences = group.users[user].preferences
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
    const group = groups[groupId]
    const preferences = group.users[userId].preferences
    res.json(preferences)
})

router.put('/:groupId/:userId/preferences/add', (req, res) => {
    const groupId = req.params.groupId
    const userId = req.params.userId
    //TODO enforce preference structure from user
    const preference = req.body
    const group = groups[groupId]
    const preferences = group.users[userId].preferences
    preferences.push(preference)
    res.json(
        {
            preferences,
            message: 'Successfully added preferences'
        }
    )
})

module.exports = { group: router, group_test_router }