import React from 'react'
import Card from "@mui/material/Card";


export default function UserList(props) {
    const users = Object.keys(props.users).map(user => props.users[user].name)
    return (
        <div>
            <h1>Friends:</h1>
          {users.map((item) => (
            <div>
                <Card>{item}</Card>
                <p>  </p>
            </div>
          ))}
        </div>
      );
}
