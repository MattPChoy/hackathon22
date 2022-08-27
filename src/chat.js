let io = require('socket.io')()

const chats = {}

const initialize = (server) => {
    io.on('connection', (socket) => {
        socket.emit('Hello from the server')
        socket.on('chat message', messagePacket => {
            const {msg, groupId, userId} = messagePacket
            chats[groupId].sendMessage({msg, userId})
        })
    })
    io.listen(server)
}

class Chat {
    constructor(
        groupId
    ) {
        this.groupId = groupId
        this.users = {}

        chats[groupId] = this
    }

    sendMessage = (msg) => {
        io.to(this.groupId).emit('chat message', msg)
    }

    addUser = (userId, username, socket) => {
        this.users[userId] = {username, socket}
        socket.join(this.groupId)
    }
}

module.exports = { Chat, initialize }