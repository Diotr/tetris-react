import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';

let yOffset = 0;
let xOffset = 5;
let score = 0;
let randomPiece = [];
let interval=null;
let dropSpeed = 1000;
  

const T = [ 
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0]
];

const O = [ 
  [3, 3],
  [3, 3],
  ];

  const Z = [ 
    [2, 2, 0],
    [0, 2, 2],
    [0, 0, 0]
  ];

  const L = [ 
    [0, 4, 0],
    [0, 4, 0],
    [0, 4, 4]
  ];


  const I = [ 
    [0, 5, 0, 0],
    [0, 5, 0, 0],
    [0, 5, 0, 0],
    [0, 5, 0, 0]
  ];

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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      score : 0
    }
    
  }

  start = () => {
   
    this.resetRound();//temporary
    this.getRandomTetromino();
    this.dropInterval();
    this.draw();
  }
dropInterval = () =>{
  console.log('insterval');
  //if(score%3===0){dropSpeed = dropSpeed/2}; //tu naprawić
  interval = setInterval(this.drop,dropSpeed);
  //console.log('dropspeed: ',dropSpeed);

}
dropStop = ()=>{
clearInterval(interval);
}

  /////////////////////////////////////////
  drop = () => {
    yOffset++; 
    
      
    if (this.collision()) {
      yOffset--;
     this.lockTetromino();
    }
    else {
      this.draw();
    }
  }


  moveRight = () => {
    xOffset++;
    if (this.collision()) {
     // console.log("kolizja");
      xOffset--;
    }
    else
      this.draw();
  }


  moveLeft = () => {
    xOffset--;
    if (this.collision()) {
      //console.log("kolizja");
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
        
   /// console.log("lock");
      }))
      this.scoreCheck();
    this.resetRound();
    };


resetRound = ()=>{
  yOffset=0;
  xOffset=4;
  this.getRandomTetromino();
  this.draw();
}


scoreCheck = ()=>{
  console.log("check");
 
gameBoard.forEach((row,index)=>{
 if(!row.includes(0)){ 
   console.log('index',row); 
   gameBoard.splice(index,1);//if row doesn't contain zero, remove it
   console.log("before",gameBoard)
   gameBoard.unshift([0,0,0,0,0,0,0,0,0,0]); //add empty row
   score++;
   console.log('index',index);
   this.setState({score : score});
   console.log('after',gameBoard);
 
}}

)
this.draw();
}

gameOver = () =>{
if(! gameBoard[0].every(this.isZero)) {//check if every item in first gameboard array equals zero
 
   console.log('game over')
   yOffset=0;
  xOffset=4;
  score = 0;
  this.dropStop();
  gameBoard.map((row,_)=>row.fill(0)) //fill gameboard with zeros

  //this.draw();
 
}
};
isZero = (field) =>{
return field ===0;
}


  collision = () => {
    this.gameOver(); //move it somewhere else
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
     //console.log("rotate: x:",xOffset,'y',yOffset);
     return;//tu coś wstawić
   }
    this.draw() }


  rotate = () => {
    console.log("rotate")
    const rotatedPiece = randomPiece.map((_, index) => randomPiece.map(col => col[index]),
    );
    return (rotatedPiece.map(row => row.reverse()));
    //return console.log(rotatedPiece.reverse());
  };


componentDidMount(){
document.onkeydown = this.onKeyDown;
}


onKeyDown = (e) =>{
  
  switch (e.keyCode){
    default: console.log('wrong key');
    break;
    case 38:e.preventDefault();this.rotateTetromino();
    break;
    case 40:e.preventDefault(); this.drop();
    break;
    case 39:e.preventDefault();this.moveRight();
    break;
    case 37:e.preventDefault();this.moveLeft();
    break;
  }
  
}
getRandomTetromino = () =>{
 let tetrominos = [T,O,Z,L,I];
  return randomPiece = tetrominos[Math.floor(Math.random()*tetrominos.length)];
  
}


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
        <button type="button" onClick={this.scoreCheck}>score</button>
        <button type="button" onClick={this.resetRound}>res</button>
        <button type="button" onClick={this.gameReset}>gameres</button>
        <button type="button" onClick={this.dropInterval}>dropspeed</button>
        <button type="button" onClick={this.dropSpeedStop}>dropstop</button>
<h1>score={this.state.score}</h1>
        
      </Layout>
    )
  }
}



export default App;