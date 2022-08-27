let usedLinks = {}

let words = []

const initialize = () => {
    const fs = require('fs')
    const chalk = require("chalk");
    words = fs.readFileSync('./resources/wordle.txt').toString().trim().split('\r\n')
    console.log(chalk.greenBright('Successfully loaded words for invite links'))

    return { generateInviteLink }
}

const generateInviteLink = (groupId) => {
    const len = words.length
    const index = Math.floor(Math.random() * len)
    const link = words[index]
    words.splice(index, 1)
    usedLinks[groupId] = groupId
    return link
}

module.exports = { initialize, generateInviteLink }