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

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Stack direction="Column" spacing={3}>
                <h1>Welcome to CafMap.com</h1>
                <NavLink to="/select"><Button><img src={coffee} alt="Coffee logo" width={"20%"} height={"20%"}/></Button></NavLink>
                <MapWindow/>
            </Stack>
        )
    }
}