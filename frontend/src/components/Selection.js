import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {NavLink} from 'react-router-dom'

import axios from 'axios'

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.reset()
    }

    reset() {
        this.state = {
            joinCode: '',
            userName: ''
        }
    }

    updateJoinCode(evt) {
        const val = evt.target.value
        this.setState({
            joinCode: val,
            userName: this.state.userName
        })
    }

    updateUserName(evt) {
        const val = evt.target.value
        this.setState({
            joinCode: this.state.joinCode,
            userName: val
        })
    }

    render() {
        return (
            <Stack direction="column"  spacing={2}>
                <Box component="form">
                    <TextField id="join-code" value={this.state.joinCode} onChange={evt => this.updateJoinCode(evt)} label="Join Code" variant="filled"/>
                </Box>
                <Box component="form">
                    <TextField id="user-name-join-box" value={this.state.userName} onChange={evt => this.updateUserName(evt)} label="User Name" variant="filled"/>
                </Box>
                <Button variant="outlined" id="join-btn" onClick={async (evt)=>{
                    let groupData = (await axios.get(`/api_v1/group/invite/${this.state.joinCode}`)).data
                    let newUser = (await axios.post(`/api_v1/group/${groupData.groupId}/join_as?name=${this.state.userName}`)).data
                    groupData = (await axios.get(`/api_v1/group/invite/${this.state.joinCode}`)).data
                    this.props.history.push('/invite', groupData)
                }}>Join Map</Button>
                <NavLink to='/create'><Button variant="outlined" id="create-btn">No Code? Create Event</Button></NavLink>
            </Stack>
        )
    }
}
