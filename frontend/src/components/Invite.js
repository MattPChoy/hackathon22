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

import { NavLink } from 'react-router-dom'

import socketio from "socket.io-client"
import axios from "axios"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Shops from './MapComp/Shops'

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
            users: this.props.location.state.group.users,
            chat: [],
            built: false
        }
    }

    updateUsersAddUser = (userId, name) => {
        let newUsers = {...this.state.users}
        newUsers[userId] = {name}
        this.setState({
            locations: this.state.location,
            users: newUsers,
            chat: this.state.chat,
            built: false
        })
    }

    updateUsersRemoveUser = (userId) => {
        let newUsers = {...this.state.users}
        delete newUsers[userId]
        this.setState({
            locations: this.state.location,
            users: newUsers,
            chat: this.state.chat,
            built: false
        })
        axios.delete(`/api_v1/group/${this.props.location.state.group.groupId}/${this.props.location.state.userId}`)
    }

    updateChatAddMessage = (username, message) => {
        let newChat = [...this.state.chat]
        newChat.push({username, message})
        this.setState({
            locations: this.state.location,
            users: this.state.users,
            chat: newChat,
            built: false
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

    updateUsersAddLocation = (userId, location) => {
        let newLocation = {...this.state.users}
        newLocation[userId] = {location}
        this.setState({
            locations: newLocation,
            chat: this.state.chat,
            users: this.props.location.state.group.users,
            built: false
        })
    }

    updateUsersRemoveLocation = (userId, location) => {
        let newLocation = {...this.state.users}
        delete newLocation[userId]
        this.setState({
            locations: newLocation,
            chat: this.state.chat,
            users: this.props.location.state.group.users,
            built: false
        })
    }

    updateBuilt = () => {
        this.setState({
            locations: this.state.location,
            users: this.state.users,
            chat: this.state.chat,
            built: true
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
                <ChatWindow messages={this.state.chat} msgInterface={{ send: this.send }}/>
                <Stack direction="column" spacing={2}>
                    { this.state.built ? <Shops></Shops> : null }
                    { !this.state.built ? <UserList style={{display: (this.state.built) ? 'inherit' : 'none'}} users={this.state.users}/> : null }
                    { !this.state.built ? <Button onClick={e => this.updateBuilt()}>Build a CafMap</Button> : null }
                </Stack>
                <Stack direction="column" spacing={2}>
                    <Link mapName={this.props.location.state.group.groupName} link={this.props.location.state.group.inviteLink}/>
                    <MapWindow id='super-cool-map-window'/>
                    <Box component="form">
                        <TextField id="Location" value={this.state.Location} onChange={evt => this.updateUsersAddLocation(evt)} label="Add a Location" variant="filled"/>
                    </Box>
                </Stack>
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