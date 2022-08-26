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

module.exports = { group: router, group_test_router }