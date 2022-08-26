const express = require('express')
const chalk = require('chalk')
require('dotenv').config()
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { v4: uuid } = require('uuid')

const start = (port) => {
    const app = new express()

    app.use(express.static('frontend/build'))
    app.use(express.urlencoded({ extended: false }))

    const groups = {}

    //TODO hide test_apis through yargs on final release
    app.get('/test_api/group/', (req, res) => {
        res.json(groups)
    })

    app.get('/test_api/group/:id', (req, res) => {
        const groupId = req.params.id
        const group = groups[groupId]
        res.json(group)
    })

    // The query string at the end is of the form ?name={name}&as_user={name}
    app.post('/api_v1/group/create', (req, res) => {
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
    app.post('/api_v1/group/:groupId/join_as', (req, res) => {
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
    app.delete('/api_v1/group/:groupId/:userId', (req, res) => {
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

    app.listen(port, () => {
        console.log(chalk.greenBright(`Listening on port ${port}!`))
    })
}

yargs(hideBin(process.argv))
    .command('listen [port]', 'Starts the server', (yargs) => {
            return yargs
                .positional('port', {
                        describe: 'Port to listen on',
                        default: 3000
                    })
        }, (argv) => {
            start(Number(argv.port))
        })
    .parse()