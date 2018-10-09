import React, { Component } from "react";

class ColorBox extends React.Component {

    render() {
        var colorStyle = {
            backgroundColor: this.props.bgcolor
        }

        return(<div 
                className="cbox" 
                style={colorStyle}
                onClick={()=> { this.changeColor() }}>
            { this.props.bgcolor }
        </div>);
    }

    changeColor() {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);

        var colorString = "rgb("+r+","+g+","+b+")";

        //inform the higher application object of this new color
        this.props.colorChanged(colorString);
    }

}

export default ColorBox;