import React, {Component} from "react";
import Point from "./Point";
import PointStore from "./PointStore";

class Map extends Component {
    render() {
        return(<div>
            {
                this.props.points.map( (pointData,idx) => {
                    return <Point location={pointData} key={idx} pointId={idx} />
                })
            }
        </div>)
    }
}

export default Map;