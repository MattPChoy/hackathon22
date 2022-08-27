import React from 'react'

export default function Link(props) {
    const link = props.link
    const map_name = props.mapName
    return (
        <div>
            <p>Invite your friends to {map_name} with: {link}</p>
        </div>
    )
}
