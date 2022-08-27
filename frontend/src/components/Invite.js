import Card from "@mui/material/Card";
import React, { useState } from 'react';
import UserList from "./InvComp/UserList";
import Link from "./InvComp/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={2}>
                    <UserList/>
                    <Button>Build a CafMap</Button>
                </Stack>
                <Stack direction="column" spacing={2}>
                    <Link/>
                    <h1>MAP HERE</h1>
                </Stack>
            </Stack>
        );
    }
}