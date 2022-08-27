import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Join extends React.Component {
    render() {
        return (
            <Box component="form">
                <TextField id="join-code" label="Join Code" variant="filled"
                />
            </Box>
        )
    }
}
