import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import socketio from "socket.io-client"

let io = undefined

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        io = io ?? socketio.connect()
        setInterval(() => {
            this.send({msg: 'Message :)', groupId: this.props.groupId, userId: this.props.userId})
        }, 5000)
        this.onMessageReceive((userId, message) => {
            console.log(`${userId}: ${message}`)
        })
    }

    render() {
        return (
            <p>Hello World</p>
        )
    }

    send(msg) {
        io.emit('chat message', { msg, groupId: this.props.groupId, userId: this.props.userId })
    }

    onMessageReceive(messageCallback){
        io.on('chat message', (msg) => {
            const {userId, message} = msg
            messageCallback(userId, message)
        })
    }
}
