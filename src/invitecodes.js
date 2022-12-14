let usedLinks = {}

let words = []

const initialize = () => {
    const fs = require('fs')
    const chalk = require("chalk");
    words = fs.readFileSync('./resources/wordle.txt').toString().trim().split('\n')
    words = words.map(word => word.trim())
    console.log(chalk.greenBright('Successfully loaded words for invite links'))

    return { generateInviteLink }
}

const generateInviteLink = (groupId) => {
    const len = words.length
    const index = Math.floor(Math.random() * len)
    const link = words[index]
    words.splice(index, 1)
    usedLinks[link] = groupId
    return link
}

const getGroupId = (inviteCode) => {
    return usedLinks[inviteCode]
}

module.exports = { initialize, generateInviteLink, getGroupId }