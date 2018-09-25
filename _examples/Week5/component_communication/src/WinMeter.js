import React, { Component } from 'react';

class WinMeter extends Component {

    state = {
        message: "Try your best!"
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.score > this.props.score) {
            setTimeout(() => { this.cheerOn() }, 2000);
        }
    }

    cheerOn() {
        this.setState({message: "Go go go!"});
    }

    render() {
        return(
            <div>
                <div>{ this.state.message }</div>
                <div>{ this.props.score }</div>
            </div>
        )
    }

}

export default WinMeter;