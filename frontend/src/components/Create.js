import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MapWindow from "./MapWindow";
import Invite from './Invite'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

let mapName = ""
let userName = ""

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.reset()
    }

    reset() {
        this.state = {
            mapName: ''
        }
    }

    updateMapName(evt) {
        const val = evt.target.value
        this.setState({
            mapName: val,
            userName: this.state.userName
        })
    }

    updateUserName(evt) {
        const val = evt.target.value
        this.setState({
            mapName: this.state.mapName,
            userName: val
        })
    }

    render() {
        return (
            <Stack direction="column" spacing={2}>
                <h1>Make a New CafMap</h1>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" alignItems="center" spacing={2}>
                        <h3>Map Name:</h3>
                        <TextField id="map-name" value={this.state.mapName} onChange={evt => this.updateMapName(evt)} label="Map Name" variant="filled"/>
                        <h3>Your Name:</h3>
                        <TextField id="your-name" value={this.state.userName} onChange={evt => this.updateUserName(evt)} label="User Name" variant="filled"/>
                        <Button onClick={(event) => {
                            axios.post(
                                `/api_v1/group/create?name=${this.state.mapName}&as_user=${this.state.userName}`
                            ).then((response) => {
                                this.props.history.push("/invite", response.data)
                            }).catch((err) => {
                                console.error(err)
                            })
                        }} variant="outlined" id="join-btn">Create CafMap</Button>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h3 style={{display: 'none'}}>You Must Enter 1 location to start your CafMap</h3>
                        <MapWindow/>
                    </Stack>
                </Stack>
            </Stack>
        )
    }
}
