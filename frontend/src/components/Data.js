import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box component="form">
                <TextField id="name-field" label="Name:" variant="filled"
                />
            </Box>
        )
    }
}
