import Card from "@mui/material/Card";
import React, { useState } from 'react';
import UserList from "./InvComp/UserList";
import Link from "./InvComp/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MapWindow from "./MapWindow";
import * as ReactDOM from "react-dom";
import coffee from '.././assets/images/coffee.png'
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';

import { NavLink } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    updateUsersAddLocation = (userId, location) => {
        let newLocation = {...this.state.users}
        newLocation[userId] = {location}
        this.setState({
            locations: newLocation
        })
    }

    updateUsersRemoveLocation = (userId, location) => {
        let newLocation = {...this.state.users}
        delete newLocation[userId]
        this.setState({
            locations: newLocation
        })
        //axios.delete(/api_v1/group/${this.props.location.state.group.groupId}/${this.props.location.state.userId})
    }

    render() {
        return (
            <Stack id='centre-content-main-page' direction="Column" spacing={3}>
                <h1>Welcome to CafMap.com</h1>
                <NavLink to="/select"><Button><img src={coffee} alt="Coffee logo" width={"20%"} height={"20%"}/></Button></NavLink>
                <MapWindow/>
                <Box component="form">
                    <TextField id="Location" value={this.state.Location} onChange={evt => this.updateUsersAddLocation(evt)} label="Add a Location" variant="filled"/>
                </Box>
            </Stack>
        )
    }
}