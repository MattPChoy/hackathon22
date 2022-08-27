import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChatBox from './ChatBox'


export default function ChatWindow() {
  return (
    <div>
      <h3>Chat Feature</h3>
      <ChatBox/>
      <Box component="form">
        <TextField id="Message" label="Message" variant="filled"/>
      </Box>
    </div>
  )
}
