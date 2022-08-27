import Card from "@mui/material/Card";
import React, { useState } from 'react';
import Link from "./InvComp/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Shops from './MapComp/Shops';
import MapWindow from "./MapWindow";
import ChatWindow from "./MapComp/ChatWindow";

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const map_name = "Jack's Coffee at 3"
        return (
            <Stack direction="column" spacing={2}>
                <h1>{map_name}</h1>
                <Stack direction="row" spacing={2}>
                    <Shops/>
                    <MapWindow/>
                    <ChatWindow/>
                </Stack>
            </Stack>
        );
    }
}