import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';

let yOffset = 0;
let xOffset = 5;
let randomPiece =
  [
    [1, 1, 0],
    [0, 2, 2],
    [0, 0, 0]
  ]
  ;

let gameBoard = [
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
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 6, 0, 0, 0, 0, 0, 0],
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

    }
  }
  start = () => {
    this.draw();
  }
  /////////////////////////////////////////
  drop = () => {
    console.log('drop');
    yOffset++;
    if (this.collision()) {
      console.log("kolizja");
      yOffset--;
      //this.draw();
     this.lockTetromino();
    }
    else {
      this.draw();
    }
  }
  moveRight = () => {
    xOffset++;
    if (this.collision()) {
      console.log("kolizja");
      xOffset--;
    }
    else
      this.draw();
  }
  moveLeft = () => {
    xOffset--;
    if (this.collision()) {
      console.log("kolizja");
      xOffset++;
    }
    else
      this.draw();
  }
  //////////////////////////////////////
  lockTetromino = ()=>{

    randomPiece.forEach((row, y) => row.forEach((blockColor, x) => {
      if (blockColor !== 0) {
        gameBoard[y + yOffset][x + xOffset] = blockColor}
    console.log("lock");
      }))
    this.resetRound();
    };
resetRound = ()=>{
  yOffset=0;
  xOffset=4;
  this.draw();
}
scoreCheck = ()=>{


  
}
  /* collision = () =>{
    let aa;
    let piece = randomPiece;
  let board = gameBoard;
    console.log('///////////');
  console.log('cała funkcja', aa=piece.some((row,yPos)=>
  console.log('wewn pętla',row.some((blockColor,xPos)=>{
    console.log('a',yPos,xPos, blockColor,'coll ' ,(blockColor !==0)&& board[yPos+yOffset][xPos+xOffset]===1); 
  
  }
  )
  )
  )
  )
  return console.log('aa',aa);
  } */
  collision = () => {
    console.log('kollll', yOffset);
    let piece = randomPiece;
    let board = gameBoard;
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
       
        if (piece[y][x] !== 0 &&(board[y+yOffset]&& board[y + yOffset][x + xOffset]) !== 0){
          return true;
        }
      }
    }
    return false;
  }

  rotateTetromino = () => { 
    
   randomPiece= this.rotate();
   if(this.collision()){
     console.log("rotate: x:",xOffset,'y',yOffset);
     xOffset--;//tu coś wstawić
   }
 
    this.draw() }

  rotate = () => {
    console.log("rotate")
    const rotatedPiece = randomPiece.map((_, index) => randomPiece.map(col => col[index]),
    );
    return (rotatedPiece.map(row => row.reverse()));
    //return console.log(rotatedPiece.reverse());

  };

  draw = () => {
    let newBoard = JSON.parse(JSON.stringify(gameBoard))
    //console.log('po new',newBoard)
    randomPiece.forEach((row, y) => row.forEach((blockColor, x) => {
      if (blockColor !== 0) {
        // console.log(y,x,newBoard)
        newBoard[y + yOffset][x + xOffset] = blockColor;
      }
    }))
    this.setState({ board: newBoard }, () => { console.log('draw') })
  }
  /////////////
  render() {
    return (
      <Layout>
        <div className="game-area">
          <Board board={this.state.board} />

        </div>
        <button type="button" onClick={this.start}>Start</button>
        <button type="button" onClick={this.drop}>drop</button>
        <button type="button" onClick={this.rotateTetromino}>rotate</button>
        <button type="button" onClick={this.moveLeft}>left</button>
        <button type="button" onClick={this.moveRight}>right</button>
        <button type="button" onClick={this.collision}>col</button>
        <button type="button" onClick={this.draw}>draw</button>
        <button type="button" onClick={this.resetRound}>res</button>
      </Layout>
    )
  }
}



export default App;