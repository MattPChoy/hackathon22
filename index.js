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
        res.status(200)
            .json(
                {
                    username,
                    groupId,
                    user_id: uuid()
                }
            )
    })

    app.post('/api_v1/group/create', (req, res) => {
        const groupName = req.query.name
        res.status(200)
            .json(
            {
                groupName,
                groupId: uuid()
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