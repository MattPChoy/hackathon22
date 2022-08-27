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
import axios from 'axios'

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        //const Map: React.FC<{}> = () => {};
    }

    render() {
        return (
            <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
                <UserList users={this.state.users}/>
                <Button>Build a CafMap</Button>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Link mapName={this.props.location.state.groupName} link={this.props.location.state.inviteLink}/>
                <MapWindow/>
            </Stack>
            <ChatWindow groupId={this.props.location.state.groupId} userId={this.props.location.state.admin.userId}/>
        </Stack>
        )
    }
}