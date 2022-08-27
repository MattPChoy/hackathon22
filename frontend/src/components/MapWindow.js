import { Component } from "react";
import {Map, GoogleApiWrapper} from "google-maps-react"

class MapContainer extends Component {
    render() {
        return(
            <Map
                google = {this.props.google}
                style = {{width:"100%", height:"100%"}}
                zoom = {15}
                initialCenter = {
                    {
                        lat: -27.496825810386085,
                        lng: 153.01332710033705
                    }
                }
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB6TpPhJcp6ry3r5QGKBh7YN_AIIcTUqVw"
})(MapContainer)
