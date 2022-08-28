import React from 'react'

export default function ShopView(props) {
    return (
        <div style = {{background:'purple'}}>
            <p>{props.name}</p>
            <p>Rating: {props.rating} | Price: ${props.price}</p>
        </div>
    )
}

