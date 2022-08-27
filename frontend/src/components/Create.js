import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MapWindow from "./MapWindow";


export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="column" spacing={2}>
                <h1>Make a New CafMap</h1>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" alignItems="center" spacing={2}>
                        <h3>Map Name:</h3>
                        <TextField id="join-code" label="Map Name" variant="filled"/>
                        <h3>Your Name:</h3>
                        <TextField id="join-code" label="User Name" variant="filled"/>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h3>You Must Enter 1 location to start your CafMap</h3>
                        <MapWindow/>
                    </Stack>
                    <Button variant="outlined" id="join-btn">Create CafMap</Button>
                </Stack>
            </Stack>
        )
    }
}
