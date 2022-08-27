import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
    let messages = [{mess: "Food Time XD", user: "Jack", colour: 'red'},
    {mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
    {mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'},{mess: "Food Time XD", user: "Jack", colour: 'red'},
    {mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
    {mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'},{mess: "Food Time XD", user: "Jack", colour: 'red'},
    {mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
    {mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'}]
  return (
    messages.map((message) => (
        <box>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar  sx={{ bgcolor: message.colour }}> {message.user[0]} </Avatar>
                </ListItemAvatar>
                <ListItemText primary={message.mess}/>
            </ListItem>
        </box>
    ))
  );
}
