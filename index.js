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

    // The query string at the end is of the form ?name={name}
    app.post('/api_v1/group/:groupId/join_as', (req, res) => {
        const groupId = req.params.groupId
        const username = req.query.name
        res.json(
                {
                    username,
                    groupId,
                    user_id: uuid(),
                    message: 'Successfully added user to group'
                }
            )
    })

    // The query string at the end is of the form ?name={name}
    app.post('/api_v1/group/create', (req, res) => {
        const groupName = req.query.name
        res.json(
            {
                groupName,
                groupId: uuid(),
                message: 'Successfully created group'
            }
        )
    })

    // Any query string is ignored
    app.delete('/api_v1/group/:groupId/:userId', (req, res) => {
        const groupId = req.params.groupId
        const userId = req.params.userId
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