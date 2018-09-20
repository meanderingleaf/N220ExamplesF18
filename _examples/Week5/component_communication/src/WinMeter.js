import React, { Component } from 'react';

class WinMeter extends Component {

    render() {
        return(
            <div>
                { this.props.score }
            </div>
        )
    }

}

export default WinMeter;