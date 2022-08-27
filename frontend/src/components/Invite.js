import Card from "@mui/material/Card";
import React, { useState } from 'react';
import UserList from "./InvComp/UserList";
import Link from "./InvComp/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MapWindow from "./MapWindow";
import ChatWindow from "./MapComp/ChatWindow"
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';

import socketio from "socket.io-client"

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.location.state.group.users,
            chat: []
        }
    }

    updateUsersAddUser = (userId, name) => {
        let newUsers = {...this.state.users}
        newUsers[userId] = {name}
        this.setState({
            users: newUsers,
            chat: this.state.chat
        })
    }

    updateUsersRemoveUser = (userId) => {
        let newUsers = {...this.state.users}
        delete newUsers[userId]
        this.setState({
            users: newUsers,
            chat: this.state.chat
        })
    }

    updateChatAddMessage = (username, message) => {
        let newChat = [...this.state.chat]
        newChat.push({username, message})
        this.setState({
            users: this.state.users,
            chat: newChat
        })
    }

    componentDidMount() {
        this.io = socketio.connect()
        this.io.on('chat message', (msg) => {
            const {userId, msg: message} = msg
            const name = this.state.users[userId].name
            this.updateChatAddMessage(name, message)
            console.log(name + ': ' + 'message')
        })
        this.io.on('user connected', (user) => {
            const {userId, username} = user
            this.updateUsersAddUser(userId, username)
            console.log(username + ': joined')
        })
        this.io.on('user disconnected', (userId) => {
            this.updateUsersRemoveUser(userId)
            console.log(userId + ': left')
        })

        this.io.emit('user connected', {
            userId: this.props.location.state.userId,
            groupId: this.props.location.state.group.groupId,
            username: this.state.users[this.props.location.state.userId].name
        })
    }

    componentWillUnmount() {
        this.io.emit('user disconnected', {
            userId: this.props.location.state.userId,
            groupId: this.props.location.state.group.groupId
        })
    }

    render() {
        return (
            <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
                <UserList users={this.state.users}/>
                <Button>Build a CafMap</Button>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Link mapName={this.props.location.state.group.groupName} link={this.props.location.state.group.inviteLink}/>
                <MapWindow/>
            </Stack>
            <ChatWindow messages={this.state.chat} msgInterface={{ send: this.send }}/>
        </Stack>
        )
    }

    send = (msg) => {
        this.io.emit('chat message', {
            msg,
            groupId: this.props.location.state.group.groupId,
            userId: this.props.location.state.userId
        })
    }

}