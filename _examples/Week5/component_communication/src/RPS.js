import React, { Component } from 'react';

class RPS extends Component {

    matchups = {
        "rock": { "rock": "tie", "paper": "loss", "scissors": "win" },
        "paper": { "rock": "win", "paper": "tie", "scissors": "loss" },
        "scissors": { "rock": "loss", "paper": "win", "scissors": "tie" }
    }

    render() {
        return(
            <div>
                <button onClick={() => { this.makePlay("rock") }}>Rock</button> <br />
                <button onClick={() => { this.makePlay("paper") }}>Paper</button> <br />
                <button onClick={() => { this.makePlay("scissors") }}>Scissors</button>
            </div>
        )
    }

    makePlay(playerMove) {

        var possibleMoves = [ "rock", "paper", "scissors" ];
        var rndDraw = Math.floor(Math.random() * 3);
        var computerMove = possibleMoves[rndDraw];


        this.props.onPlay(this.matchups[playerMove][computerMove]);
        console.log(playerMove + " vs " + computerMove + " result: " + this.matchups[playerMove][computerMove]);
    }

}

export default RPS;