import React, {Component} from "react";
import PointStore from "./PointStore";

class Point extends Component {
    render() {
        return(<div onClick={() => { this.handleClick() }}>
            {this.props.location.x}
        </div>)
    }

    handleClick() {
        PointStore.changePoint(this.props.pointId);
    }
}

export default Point;