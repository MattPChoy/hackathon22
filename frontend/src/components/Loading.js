import React from "react";
import coffee_top from "../assets/images/coffee-top.png"

let loading = coffee_top

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={loading} id="App-logo" className="App-logo" alt="logo" />
        )
    }
}
