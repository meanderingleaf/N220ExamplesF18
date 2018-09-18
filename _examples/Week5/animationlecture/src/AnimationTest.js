import React, { Component } from 'react';
import "./AnimationTest.css";


class AnimationTest extends Component {

    constructor(props) {
        super(props);    

        this.state = {
            animClass: "dim"
        }
    }

    mouseOver() {
        this.setState({ animClass: "glow" })
    }

    mouseOut() {
        this.setState({ animClass: "dim" })
    }

    render() {
        return(
            <div>
                <div id="firefly" 
                    className={this.state.animClass}
                    onMouseOver={() => { this.mouseOver() }}
                    onMouseOut={() => { this.mouseOut() }}>
                    firefly
                </div>
            </div>
        )
    }

}

export default AnimationTest;