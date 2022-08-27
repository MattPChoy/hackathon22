const express = require('express')
const chalk = require('chalk')
require('dotenv').config()
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const apiV1 = require('./src/api_v1')
const testApi = require('./src/test_api')

const start = (port) => {
    const app = new express()

    app.use(express.static('frontend/build'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    app.use('/api_v1', apiV1)
    if (process.env.TEST_API) {
        app.use('/test_api', testApi)
    }

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