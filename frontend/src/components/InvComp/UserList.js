import React from 'react'
import Card from "@mui/material/Card";


export default function UserList() {
    const users =  ['Jack','Amy','Phil','Sally']
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
