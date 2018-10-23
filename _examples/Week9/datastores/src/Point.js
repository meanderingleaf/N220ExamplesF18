import React, {Component} from "react";
import PointStore from "./PointStore";

class Point extends Component {

    render() {

        var styleObj = {
            width: "20px",
            height: "20px",
            backgroundColor: "#990000",
            position: "absolute",
            left: this.props.location.x,
            top: this.props.location.y
        }

        return(<div onClick={() => { this.handleClick() }} style={styleObj}>
            {this.props.location.x}
        </div>)
    }

    handleClick() {
        PointStore.changePoint(this.props.pointId);
    }
}

export default Point;