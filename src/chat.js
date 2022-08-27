let io = require('socket.io')()

const chats = {}

const initialize = (server) => {
    io.on('connection', (socket) => {
        socket.on('chat message', messagePacket => {
            const {msg, groupId, userId} = messagePacket
            chats[groupId].sendMessage({msg, userId})
            console.log('message')
        })
        socket.on('user connected', info => {
            const {userId, groupId, username} = info
            chats[groupId].sendUserConnected(userId, username)

            chats[groupId].addUser(userId, username, socket)
            console.log('connect')
        })
        socket.on('user disconnected', info => {
            const {userId, groupId} = info
            chats[groupId].sendUserDisconnected(userId)
            console.log('disconnect')
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

    sendUserConnected = (userId, userName) => {
        io.to(this.groupId).emit('user connected', {userId, username: userName})
    }

    sendUserDisconnected = (userId) => {
        io.to(this.groupId).emit('user disconnected', userId)
    }

    addUser = (userId, username, socket) => {
        this.users[userId] = {username, socket}
        socket.join(this.groupId)
    }
}

module.exports = { Chat, initialize }