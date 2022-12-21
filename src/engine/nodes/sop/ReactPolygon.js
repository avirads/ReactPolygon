import React from 'react'
import ReactDOM from 'react-dom/client'

import {TypedSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/_Base';

export class ReactPolygonSopNode extends TypedSopNode {
    static type() {
        return 'reactPolygon';
    }

    initializeNode() {
    }

    cook(inputContents) {

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                return ( <>
                            React inside Polygon
                            </>
                        )
            </React.StrictMode>,
          )
 
        this.setCoreGroup(coreGroup);
    }    
}