import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="column" spacing={2}>
                <Button variant="outlined" id="create-btn">Create Event</Button>
                <Button variant="outlined" id="join-btn">Join Event</Button>
            </Stack>
        )
    }
}
