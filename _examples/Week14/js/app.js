class Grid extends HTMLDivElement {
    constructor() {
        super();

        for(var y = 0; y < gameController.cells.length; y++ ) {

            var row = document.createElement("div");
            row.style.display = "flex";
            this.appendChild(row);

            for(var x = 0; x < gameController.cells[0].length; x++) {
                var newBox = new Box(gameController.cells[y][x],x,y);
                row.appendChild(newBox);
            }
        }
    }
}

class Box extends HTMLDivElement {
    constructor(initialValue,xPos,yPos) {
        super();
        this.xPos = xPos;
        this.yPos = yPos;
        this.innerHTML = initialValue;
        this.addEventListener("click", this.handleClick.bind(this) );
    }

    handleClick(event) {
        gameController.cellClicked(this.xPos, this.yPos);
        this.innerHTML = gameController.currentPlayer;
    }
}

class GameController {
    constructor() {

        this.cells = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]

        this.currentTurn = 0;
        this.currentPlayer = "X";
    }

    cellClicked(xPos,yPos) {
        //step forward in turns
        this.currentTurn ++;

        if(this.currentTurn % 2 == 0) {
            this.currentPlayer = "X"
        } else {
            this.currentPlayer = "O";
        }

        this.cells[yPos][xPos] =  this.currentPlayer; 

        this.checkWin();
    }

    checkWin() {
        //check for a win
        //tell me via console.log if there is.
    }
}
var gameController = new GameController();


customElements.define('game-box', Box, { extends: "div"} );
customElements.define('game-grid', Grid, { extends: "div"} );
