import Card from "@mui/material/Card";
import React from 'react';
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';


export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        const Map: React.FC<{}> = () => {};
    }

    render(status: Status) {
        return (
            <div>
                <h1>{status}</h1>

            </div>
        )
    }
}
