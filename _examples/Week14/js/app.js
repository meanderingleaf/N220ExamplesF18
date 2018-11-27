class Grid extends HTMLDivElement {
    constructor() {
        super();

        this.cells = [
            [0,0,0],
            [0,4,0],
            [0,0,0]
        ]

        for(var y = 0; y < this.cells.length; y++ ) {
            for(var x = 0; x < this.cells[0].length; x++) {
                var newBox = new Box(this.cells[y][x]);
                this.appendChild(newBox);
            }
        }
    }
}

class Box extends HTMLDivElement {
    constructor(initialValue) {
        super();
        this.innerHTML = initialValue;
        this.addEventListener("click", this.handleClick.bind(this) );
    }

    handleClick(event) {
        gameController.cellClicked();
        this.innerHTML = gameController.playerTurn;
    }
}

class GameController {

    constructor() {
        this.curStep = 0;
        this.playerTurn = "X";
    }

    cellClicked() {
        if(this.curStep%2) {
            this.playerTurn = "X";
        } else {
            this.playerTurn = "O";
        }

        this.curStep++
    }
}

let gameController =  new GameController();



customElements.define('game-box', Box, { extends: "div"} );
customElements.define('game-grid', Grid, { extends: "div"} );

