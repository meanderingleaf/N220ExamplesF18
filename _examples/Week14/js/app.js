

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
                var newBox = new Box(this.cells[y][x], this.cellClicked.bind(this));
                this.appendChild(newBox);
            }
        }
    }

    cellClicked() {

    }
}

class Box extends HTMLDivElement {
    constructor(initialValue,clickCallback) {
        super();
        this.innerHTML = initialValue;
        this.clickCallback = clickCallback;
        this.addEventListener("click", this.handleClick.bind(this) );
    }

    handleClick(event) {
        this.clickCallback();
        GameController.cellClicked()
        this.innerHTML = GameController.playerTurn;
    }
}

const GameController = {
    cellClicked: function() {
        console.log(this);
    }
};

customElements.define('game-box', Box, { extends: "div"} );
customElements.define('game-grid', Grid, { extends: "div"} );

var myGrid = new Grid();
document.querySelector("#container").appendChild(myGrid);



