import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            gameBoard: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]],


            piece: [
                [0, 1, 0],
                [1, 2, 1],
                [0, 0, 0]

            ],
            piece2: [
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 1]
            ],
            blockGravity: -1,
            blockHorizontalPos: 4,



        }
    }

    moveRight = () => this.setState({ blockHorizontalPos: this.state.blockHorizontalPos + 1 });
    moveLeft = () => this.setState({ blockHorizontalPos: this.state.blockHorizontalPos - 1 });
    gravity = () => { this.setState({ blockGravity: this.state.blockGravity + 1 }); }




    gamePlay = () => {
        //sprawdza czy klocek osiadł

        // this.isLocked();
        let randomBlock = this.state.piece;
        let d = this.state.blockGravity;
        let e = this.state.blockHorizontalPos;
        this.setState({ board: this.state.gameBoard });
        //czyści pole gry 
        // console.log("this.state." + this.state.piece.length);
        //tu wstawić sprawdzanie czy jest kolizja? if false to wywołuje tego returna, albo nie bo tu jeszcze nie ma offsetu
        return this.drawA({ y: d, x: e, randomBlock });//ten return musi zostać
    };
    rotateBlock = () => (this.setState({ piece: this.rotate(this.state.piece, 1) }))

    rotate = (matrix, dir) => {
        const rotatedPiece = matrix.map((_, index) => matrix.map(col => col[index]),
        );
        if (dir > 0) return (rotatedPiece.map(row => row.reverse()));
        return rotatedPiece.reverse();

    };
    gamePlayStart = () => {
        this.gameID = setInterval(this.gravity, 1000);
        this.gameID = setInterval(this.gamePlay, 100);
        //to rzeba zmienic, tylko tymczasowo tak jest

    };
    gamePlayStop = () => clearInterval(this.gameID);

    isLocked = () => {
        //if (this.state.blockGravity > 3) {//to 3 to tylko do testów, zamiastt tego trzeba bedzie wstawić coś ze sprawdzania kolizji
        //ta funkcja nie będzie nic sprawdzać
        console.log("lock");

        this.setState({ gameBoard: this.state.board })//ta funkcja dodaje tetromino do gameBoard, łączy board z narysowanym klockiem do gameBoard
        //console.log(this.state.board + "       " + this.state.gameBoard);
        // this.gamePlayStop();
        this.resetPlayer();
        return true;

        //  }

        //console.log("kondiszon "+ this.state.blockGravity+" "+this.state.board+"  "+this.state.gameBoard);
    }

    resetPlayer = () => {

        this.setState({ blockGravity: -1 });
        this.setState({ blockHorizontalPos: 4 });

    };
   
        collisionCheck = (yPos, xPos) => {
            return this.state.board.some((row, y) => row.some((value, x) => (y === yPos && x === xPos && value != 0)));
        
    }
    //te poniżej chyba już są ok

    drawA = (props) => props.randomBlock.forEach((row, y) =>//ta funkcja rysuje nowe tetromino w state: board, jeśli nie można dalej przesunąć klocka trzeba zawołać isLocked
        row.forEach((blockColor, x) => {
            if (blockColor !== 0) {
                let yPos = (y + props.y)//offset
                let xPos = (x + props.x)
                //niech na bierzaco sprawdza czy w polu gdzie sie ma znalezc ypos jest wartość 0
                // console.log("collll "+this.collisionCheck(yPos,xPos))
                if (this.collisionCheck(yPos, xPos)){
                    console.log("true");
                }
                  else console.log("false");
                this.updateBoard(yPos, xPos, blockColor)
            }
        }))

    printValue = (props) => {
        console.log("print " + props)
    }
    updateBoard = (yPos, xPos, blockColor) => {
        //console.log("upd"+yPos+"  "+xPos+"  bl  "+ blockColor)
        const newBoard = this.state.board.map((row, y) => row.map((value, x) => {
            if ((y === yPos && x === xPos)) { return value = blockColor }
            else { return value }
        }));
        this.setState({ board: newBoard });
        //this.isLocked(); //nie wiem czy to powinno być tu
    }
    render() {
        return (
            <Layout>
                <div className="game-area">
                    <Board board={this.state.board} />

                </div>
                <button type="button" onClick={this.gamePlayStart}>Start</button>
                <button type="button" onClick={this.gamePlayStop}>Stop</button>
                <button type="button" onClick={this.moveLeft}>Lewo</button>
                <button type="button" onClick={this.moveRight}>Prawo</button>
                <button type="button" onClick={this.rotateBlock}>rotate</button>

            </Layout>
        )
    }
}



export default App;