import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChatBox from './ChatBox'


//{[{mess: "Food Time XD", user: "Jack", colour: 'red'},
//{mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
//{mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'},{mess: "Food Time XD", user: "Jack", colour: 'red'},
//{mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
//{mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'},{mess: "Food Time XD", user: "Jack", colour: 'red'},
//{mess: "Merlo for sure!", user: 'Phil', colour: 'orange'},
//{mess: "I'll be late, sorry!", user: 'Sally', colour: 'purple'}]

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    clearMessageField = () => {
        this.setState({
            message: ''
        })
    }

    updateMessageField = (val) => {
        this.setState({
            message: val
        })
    }

    sendMessageField = (e) => {
        e.preventDefault()
        this.props.msgInterface.send(this.state.message)
        this.clearMessageField()
    }

    render() {
        return (
            <div>
                <h3>Chat Feature</h3>
                <ChatBox messages={this.props.messages}/>
                <form onSubmit={e => this.sendMessageField(e)}>
                    <TextField value={this.state.message} onChange={evt => this.updateMessageField(evt.target.value)} id="message-box" label="Message" variant="filled"/>
                </form>
            </div>
        )
    }
}

