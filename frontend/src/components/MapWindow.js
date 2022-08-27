import React from 'react';
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';

export default class MapWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render(status: Status) {
        return (
            <div>
            <MapsComponent id="maps" zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
                        <Inject services={[Zoom]}/>
                            <LayersDirective>
                                <LayerDirective urlTemplate='https://tile.openstreetmap.org/level/tileX/tileY.png'/>
                            </LayersDirective>
                        </MapsComponent>
            <h1>{status}</h1>
            </div>
        )

    }
} 
