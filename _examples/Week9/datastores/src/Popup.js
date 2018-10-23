import React, {Component} from "react";

class Popup extends Component {

    render() {
        var styleObj = {
            display: this.props.visible == "true" ? "block" : "none",
            position: "absolute",
            zIndex: "100",
            width: "700px",
            height: "700px",
            top: "20px",
            left: "20px",
            backgroundColor: "#aaa"
        }

        return(<div style={styleObj}>
                <h2>Popup!</h2>
        </div>);
    }
}

export default Popup;