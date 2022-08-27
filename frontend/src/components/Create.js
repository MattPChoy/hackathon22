import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="column" spacing={2}>
                <h1>Make a New CafMap</h1>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" spacing={2}>
                        <h3>Map Name:</h3>
                        <TextField id="join-code" label="Map Name" variant="filled"/>
                        <h3>Your Name:</h3>
                        <TextField id="join-code" label="User Name" variant="filled"/>
                        <h3>Start Location</h3>
                        <h1>MAP HERE</h1>
                    </Stack>
                    <Button variant="outlined" id="join-btn">Create CafMap</Button>
                </Stack>
            </Stack>
        )
    }
}
