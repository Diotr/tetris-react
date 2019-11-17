import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Board from './Board';
import Controls from './Controls/Controls';
import Buttons from './Controls/Buttons/Buttons';
import buttons from './Controls/Buttons/Buttons';

let level =1;
let yOffset = 0;
let xOffset = 5;
let score = 0;
let totalScore = 0;
let randomPiece = [];
let interval=null;
let dropSpeed = 1000;
let linesTotal =0;
let buttonsActive = false;
const gameover = "GAME OVER";


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
  const S = [ 
    [0, 2, 2],
    [2, 2, 0],
    [0, 0, 0]
  ];

  const L = [  
    [0, 0, 4],
    [4, 4, 4],
    [0, 0, 0]
  ];

  const M = [  
    [4, 0, 0],
    [4, 4, 4],
    [0, 0, 0]
  ];
  const I = [ 
    [0, 0, 0, 0],
    [5, 5, 5, 5],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
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
      totalScore : 0,
      gameInfo: 'Hello'
    }
    
    
  }

  start = () => {
    this.setState({gameInfo:'New Game'})
    this.gameReset();
    buttonsActive = true;
    this.resetRound();//temporary
    this.getRandomTetromino();
    this.dropInterval();
    this.draw();
  }
  pause = () =>{
   
   let x = document.getElementById('pauseButton').value;
    if(document.getElementById('pauseButton').value==='resume'){
      document.getElementById('pauseButton').value='pause'
      this.setState({gameInfo:"Pause"})
      buttonsActive = false;
      this.dropStop();
    }
    else if (document.getElementById('pauseButton').value==='pause'){
      document.getElementById('pauseButton').value='resume'
   this.dropInterval();
   this.setState({gameInfo:"Resumed"})
    buttonsActive = true};
    document.getElementById('pauseButton').textContent=x; //change button text
    
  }
dropInterval = () =>{
  console.log('insterval');
 
  interval = setInterval(this.drop,dropSpeed);
 

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
      xOffset--;
    }
    else
      this.draw();
  }


  moveLeft = () => {
    xOffset--;
    if (this.collision()) {
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
  let score = 0;
 let multipleLines= 0;
gameBoard.forEach((row,index)=>{
 if(!row.includes(0)){ 
   gameBoard.splice(index,1);//if row doesn't contain zero, remove it
   gameBoard.unshift([0,0,0,0,0,0,0,0,0,0]); //add empty row
  
   multipleLines++
  }})
if (linesTotal!==0&&linesTotal%5===0){level++;
   dropSpeed=dropSpeed-50;this.dropStop();this.dropInterval(); };//if level up, drop speed increases
score = this.calculateScore(multipleLines);
linesTotal+=multipleLines;
totalScore = totalScore +=score;
this.setState({totalScore : totalScore});
this.draw();
}

calculateScore = (multipleLines) =>{
  let score;
  if (multipleLines===0){
    score=0
  }
  else if (multipleLines<=1){
    score=multipleLines*100
  }
 else if (multipleLines===2){
    score=300
  }
  else if (multipleLines===3){
    score=500
  }else if (multipleLines===4){
    score=800
  }
  return score;
}

gameOver = () =>{
if(! gameBoard[0].every(this.isZero)) {//if first row doesn't contain zero, game is over
 
   console.log('game over')
   this.dropStop();
   buttonsActive = false;
//display game over
  //this.draw();
  this.setState({gameInfo:'gameover'});
 
}
};
isZero = (field) =>{
return field ===0;
}

gameReset = () =>{
yOffset=0;
  xOffset=4;
  score = 0;
  this.dropStop();
  gameBoard.map((row,_)=>row.fill(0)) //fill gameboard with zeros
}

  collision = () => {
    this.gameOver(); 
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
   randomPiece= this.rotate(0);
   if(this.collision()){
     randomPiece=this.rotate(1);//if collided rotate tetromino to previous position
     return;//if collided try to move tetromino left or right?
   }
    this.draw() }


  rotate = (direction) => {
    const rotatedPiece = randomPiece.map((_, index) => randomPiece.map(col => col[index]),
    );
   if(direction===0)
    return (rotatedPiece.map(row => row.reverse()));
   else return rotatedPiece.reverse();
  };


componentDidMount(){
document.onkeydown = this.onKeyDown;
}


onKeyDown = (e) =>{
  if(buttonsActive){
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
}
getRandomTetromino = () =>{
 let tetrominos = [T,O,Z,L,I,S,M];
  return randomPiece = tetrominos[Math.floor(Math.random()*tetrominos.length)];
  
}


  draw = () => {
    let newBoard = JSON.parse(JSON.stringify(gameBoard))// make copy of gameboard
    randomPiece.forEach((row, y) => row.forEach((blockColor, x) => {
      if (blockColor !== 0) {
        newBoard[y + yOffset][x + xOffset] = blockColor;
      }
    }))
    this.setState({ board: newBoard }, () => {  })
  }
  /////////////
  render() {
    return (
      <Layout >
        
      <div className = 'game'>

        <div className = 'left-column'>
         
        </div>

        <div className = 'center-column'>
        <div className="game-area">
          <Board board={this.state.board} />
        </div> 
        </div>

        <div className='right-column'>
        <div className = "controls">
       <Controls start = {this.start}
       
        dropStop = {this.dropStop}
        gameover = {this.state.gameInfo}
        totalScore = {this.state.totalScore}
        level = {level}
        linesTotal = {linesTotal}
        pause = {this.pause}/>
        </div>
        </div>
        </div>
      </Layout>
    )
  }
}



export default App;