import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';
import { yieldExpression } from '@babel/types';
let yOffset = -1;
let xOffset = 5;
let randomPiece =
  [
    [0, 0, 0],
    [0, 2, 2],
    [2, 2, 0]
  ]
const tetromino = [{
  row: 0,
  x: 5,
  blockColor: 1
}
];
const tetr = [{ y: 0, x: 5, blockColor: 1 },
{ y: 0, x: 5, blockColor: 1 },
{ y: 0, x: 6, blockColor: 1 },
{ y: 0, x: 7, blockColor: 1 },
{ y: 1, x: 6, blockColor: 1 },
{ y: 2, x: 5, blockColor: 1 },
{ y: 2, x: 6, blockColor: 1 },
{ y: 2, x: 7, blockColor: 1 }]
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
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

   randomPiece.forEach((row,yPos)=>
   row.forEach((blockColor,xPos)=>{
     if(blockColor!=0){
      console.log("iff", yPos+yOffset, xPos+xOffset, blockColor);
      this.state.gameBoard.forEach((row,y)=>row.some((value,x)=>{
        if(xPos+xOffset<0||xPos+xOffset>9||yPos+yOffset>19||(y===yPos+yOffset&&x===xPos+xOffset&&value !==0))
      {
          console.log('koliduje',y,x,yPos+yOffset,xPos+xOffset);
          return true;
        }
      }))
     }
   }))
   return false;
  }
 
  sideCollision = () => { }

  playerReset = () => { }

  lockTetromino = () => { }
  startGame = () => {
    this.updateTetrominoPosition();
  }
  ////////////////////////////////
  moveRight = () => {
    xOffset += 1;
    this.updateTetrominoPosition()
  }

  moveLeft = () => {
    xOffset -= 1;
    this.updateTetrominoPosition()
  }


  tetrominoDrop = () => {

    //console.log('przed drop',this.state.board)
    console.log('tetrchecj',this.dropCollision())
    // console.log('drop upd',this.state.board)

    this.updateTetrominoPosition()
    //console.log('po upd',this.state.board)
    //////////////////////////////// tu coś trzeba zmienić, jest coś źle z callbackiem/////////////////


    yOffset += 1;
  }
  //////////////////////
  updateTetrominoPosition = () => {
    this.setState({ board: this.state.gameBoard },
      () => { this.draw() })
    console.log("update")
  }


  /////////////////////////
  rotateTetromino = () => { return randomPiece = this.rotate(randomPiece), this.updateTetrominoPosition() }

  rotate = (randomPiece) => {
    console.log("rotate")
    const rotatedPiece = randomPiece.map((_, index) => randomPiece.map(col => col[index]),
    );
    return (rotatedPiece.map(row => row.reverse()));
    //return console.log(rotatedPiece.reverse());

  };
  ////////////////////////
  draw = () => {

    let newBoard = this.state.board;
    randomPiece.forEach((row,yPos) => {
    row.forEach((blockColor, xPos) => {
        if (blockColor !== 0) {
          newBoard = newBoard.map((row,y) => row.map((value, x) => {
            if ((y === (yPos+ yOffset) && x === xPos + xOffset && blockColor !== 0)) {
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
      console.log("draw: gameBboard", this.state.gameBoard)

    });

  }

  /////////////
  render() {
    return (
      <Layout>
        <div className="game-area">
          <Board board={this.state.board} />

        </div>
        <button type="button" onClick={this.startGame}>Start</button>
        <button type="button" onClick={this.tetrominoDrop}>drop</button>
        <button type="button" onClick={this.rotateTetromino}>rotate</button>
        <button type="button" onClick={this.moveLeft}>left</button>
        <button type="button" onClick={this.moveRight}>right</button>
        <button type="button" onClick={this.dropCollision}>d</button>
      </Layout>
    )
  }
}



export default App;