import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function AlignItemsList(props) {
    let messages = props.messages
    return (
        messages.map((message) => (
            <box>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        {/*TODO add the ability to set colours somehow */}
                        <Avatar  sx={{ bgcolor: 'green' }}> {message.username[0]} </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={message.message}/>
                </ListItem>
            </box>
        ))
    );
}

