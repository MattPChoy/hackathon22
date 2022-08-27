import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="column"  spacing={2}>
                <Box component="form">
                    <TextField id="join-code" label="Join Code" variant="filled"/>
                </Box>
                <Box component="form">
                    <TextField id="user-name" label="User Name" variant="filled"/>
                </Box>
                <Button variant="outlined" id="join-btn">Join Map</Button>
                <Button variant="outlined" id="create-btn">No Code? Create Event</Button>
            </Stack>
        )
    }
}
