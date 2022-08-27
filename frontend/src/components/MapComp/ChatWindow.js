import React from 'react'
import ChatClass from '../ChatClass'

export default function ChatWindow(props) {
  return (
    <div>
        <h3>Chat</h3>
      <ChatClass groupId={props.groupId} userId={props.userId} />
      <h3>Comment Out</h3>
    </div>
  )
}
