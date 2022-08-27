import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import socketio from "socket.io-client"
const io = socketio.connect()

export default class Chat extends React.Component {
    constructor() {
        super()
        setInterval(() => {
            this.send('Message :)')
        }, 5000)
        this.onMessageReceive((msg) => {
            console.log(msg)
        })
    }

    render() {
        return (
            <p>Hello World</p>
        )
    }

    send(msg) {
        io.emit('chat message', msg)
    }

    onMessageReceive(messageCallback){
        io.on('chat message', (msg) => {
            messageCallback(msg)
        })
    }
}
