import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';
;






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

            tetrominoState: [],
            piece:
                [
                    [0, 0, 0],
                    [0, 1, 0],
                    [1, 1, 1]
                ],


            piece2: [
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1]
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
        this.setState({ board: this.state.gameBoard });
        //czyści pole gry 
        this.drawA({ randomBlock });//ten return musi zostać
    };
    rotateBlock = () => (this.setState({ piece: this.rotate(this.state.piece, 1) }))

    rotate = (matrix, dir) => {
        console.log("rotate")
        const rotatedPiece = matrix.map((_, index) => matrix.map(col => col[index]),
        );
        if (dir > 0) return (rotatedPiece.map(row => row.reverse()));
        return rotatedPiece.reverse();

    };
    gamePlayStart = () => {
        this.gameID = setInterval(this.gravity, 1000);
        this.gameID = setInterval(this.gamePlay,1000);
        //to rzeba zmienic, tylko tymczasowo tak jest

    };
    gamePlayStop = () => { clearInterval(this.gameID) };

    isLocked = () => {
        //if (this.state.blockGravity > 3) {//to 3 to tylko do testów, zamiastt tego trzeba bedzie wstawić coś ze sprawdzania kolizji
        //console.log("lock");
        this.setState({ gameBoard: this.state.board })//ta funkcja dodaje tetromino do gameBoard, łączy board z narysowanym klockiem do gameBoard
        //console.log(this.state.board + "       " + this.state.gameBoard);
        this.resetPlayer();
        return true;
        //  }
        //console.log("kondiszon "+ this.state.blockGravity+" "+this.state.board+"  "+this.state.gameBoard);
    }

    resetPlayer = () => {
        this.setState({ blockGravity: -1 });
        this.setState({ blockHorizontalPos: 4 });
    };


    collision = () => {
        console.log("collison");
        this.state.tetrominoState.forEach((item, index) => {
            this.state.board.some((row, y) => row.some((value, x) => {
                if (y === item.yPos && x === item.xPos && value !== 0) {
                 return   console.log("true")

                }
            

            }
            )

            )
        }
        )
    }
    //te poniżej chyba już są ok
    drawA = (props) => {
        this.setState({ tetrominoState: [] })
        const tetromino = props.randomBlock.map((row, y) =>//ta funkcja rysuje nowe tetromino w state: board, jeśli nie można dalej przesunąć klocka trzeba zawołać isLocked
            row.map((blockColor, x) => {
                {
                    this.player = {
                        yPos: y + this.state.blockGravity,
                        xPos: x + this.state.blockHorizontalPos,
                        blockColor: blockColor
                    }
                }
                /// console.log("player: " + this.player.xPos)
                //dodać obiekt player do arr 
                this.setState(prevState => ({ tetrominoState: [...prevState.tetrominoState, this.player] }))
            }
            ))
        console.log("tetrstatedrav ", this.state.tetrominoState)
       if( this.collision()){return this.isLocked()}
        else this.upd()
    }
    upd = () => {
        this.state.tetrominoState.forEach((item, index) => {
            console.log("tetrstate ", this.state.tetrominoState)
            console.log("rysuj y " + item.yPos + " x " + item.xPos + " v " + item.blockColor)
            //console.log(item.yPos, "  ",item.xPos)
            const newBoard = this.state.board.map((row, y) => row.map((value, x) => {
                console.log("upd")
                if ((y === item.yPos && x === item.xPos && item.blockColor !== 0)) { return value = item.blockColor }
                else return value;
            }))
            this.setState({ board: newBoard });

        }
        )

    }
    rysuj = () => {
        this.state.tetrominoState.forEach(() => { console.log("rysuj y " + this.player.yPos + " x " + this.player.xPos + " v " + this.player.blockColor) })
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