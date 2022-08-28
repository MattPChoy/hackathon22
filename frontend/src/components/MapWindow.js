import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react"

const CustomMarker = (props) => {
    return(
        <Marker name={props.id} id={props.id} position={props.location}/>
    );
}

class MapContainer extends Component {
    onMapClicked = (props) => {
        this.props.location = {
            lat: -27.4984649, lng: 153.0130584
        }
    };

    render() {
        return(
            <Map
                google = {this.props.google}
                style = {{width:"50vw", height:"50vh"}}
                zoom = {17}
                initialCenter = {
                    {
                        lat:-27.4970579,
                        lng:153.0132595
                    }
                }
            >
                {CustomMarker({location: {lat: -27.4984649, lng: 153.0130584}, id: "a"})}
                {CustomMarker({location: {lat: -27.49808862033589, lng: 153.01425141052513}, id: "b"})}
                {CustomMarker({location: {lat: -27.494448596616834, lng: 153.01499692852744}})}
                {CustomMarker({location: {lat: -27.50058516552972, lng: 153.01272635099713}})}
                {CustomMarker({location: {lat: -27.49465529604012, lng: 153.01401993579987}})}
                {CustomMarker({location: {lat: -27.4960616413587, lng: 153.01367085892977}})}
                {CustomMarker({location: {lat: -27.49674180265685, lng: 153.01136470400075}})}
                {CustomMarker({location: {lat: -27.49674180265685, lng: 153.01136470400075}})}
                {CustomMarker({location: {lat: -27.49658957115347, lng: 153.01133024541662}})}
                {CustomMarker({location: {lat: -27.497253281806824, lng: 153.01555540000274}})}
                {CustomMarker({location: {lat: -27.49927011876762, lng: 153.01541916497223}})}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB6TpPhJcp6ry3r5QGKBh7YN_AIIcTUqVw"
})(MapContainer)