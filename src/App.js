import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';
let gravity = 0;
let xPosition = 5;
let randomPiece=
[
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 0]
]
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
        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      ],

      piece2:
        [
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 0]
        ],
    }
  }
  dropCollision = () => {
    //console.log(y, '====', gravity, ' ', x, ' ===', xPosition, 'val', value)
    console.log( (this.state.board.some((row, y) => row.some((value, x) => (y===gravity && x===xPosition &&value !=0,
      console.log(y,gravity,x,xPosition,value)
     )
       ))))
      return this.dropCollision}

  sideCollision = () => { }

  playerReset = () => { }

  lockTetromino = () => { }
  ////////////////////////////////
  moveRight = () => {
    xPosition = xPosition + 1;
    this.updateTetrominoPosition()
  }

  moveLeft = () => {
    xPosition = xPosition - 1;
    this.updateTetrominoPosition()
  }


  tetrominoDrop = () => {

     this.dropCollision() 
     
    this.updateTetrominoPosition()
    gravity = gravity + 1;
  }
  //////////////////////
  updateTetrominoPosition = () => {
    this.setState({ board: this.state.gameBoard },
      () => { this.draw() })
      console.log("update")
  }


  /////////////////////////
  rotateTetromino = () => {return randomPiece=this.rotate(randomPiece), this.updateTetrominoPosition() }

  rotate = (randomPiece) => {
    console.log("rotate")
    const rotatedPiece =randomPiece.map((_, index) => randomPiece.map(col => col[index]),
    );
     return (rotatedPiece.map(row => row.reverse()));
    //return console.log(rotatedPiece.reverse());

  };
  ////////////////////////
  draw = () => {

    let newBoard = this.state.board;
    randomPiece.forEach((row, yPos) => {
      row.forEach((blockColor, xPos) => {
        if (blockColor !== 0) {
          newBoard = newBoard.map((row, y) => row.map((value, x) => {
            if ((y === yPos + gravity && x === xPos + xPosition && blockColor !== 0)) {
              return value = blockColor
            } else {
              return value
            }
          }));
        }
      })
    })
    this.setState({
      board: newBoard
    }, () => {
      console.log("draw: board", this.state.board)
    });

  }

  render() {
    return (
      <Layout>
        <div className="game-area">
          <Board board={this.state.board} />

        </div>
        <button type="button" onClick={this.tetrominoDrop}>Start</button>

        <button type="button" onClick={this.rotateTetromino}>rotate</button>
        <button type="button" onClick={this.moveLeft}>left</button>
        <button type="button" onClick={this.moveRight}>right</button>
      </Layout>
    )
  }
}



export default App;