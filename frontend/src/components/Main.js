import Card from "@mui/material/Card";
import React, { useState } from 'react';
import UserList from "./InvComp/UserList";
import Link from "./InvComp/Link";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MapWindow from "./MapWindow";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Stack direction="Column" spacing={4}>
                <h1>Welcome to CafMap.com</h1>
                <Button>Click Here to Begin</Button>
                <MapWindow/>
            </Stack>
        )
    }
}