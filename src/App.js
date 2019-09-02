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
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]],
           

            piece: [
                [0, 1, 0],
                [1, 2, 1],
                [0, 0, 0]
            ],
            piece2:[
                [0,0,0],
                [1,1,0],
                [1,1,0]
            ],
            blockGravity:-1,
            blockHorizontalPos:4,
            
            
           
    }
    }

    moveRight = () =>this.setState({blockHorizontalPos:this.state.blockHorizontalPos+1});
    moveLeft = () =>this.setState({blockHorizontalPos:this.state.blockHorizontalPos-1});
    gravity = () =>{this.setState({blockGravity:this.state.blockGravity+1});console.log("gravity")}
    //collisionDetection= () =>
    gamePlay = () => {
            this.isLocked();//sprawdza czy klocek osiadł
            let randomBlock = this.state.piece;  
            let d=this.state.blockGravity;
            let e=this.state.blockHorizontalPos;
            this.setState({board:this.state.gameBoard});  //czyści pole gry
            console.log("gamePlay");
            return this.drawA({y:d,x:e,randomBlock});//ten return musi zostać
    } ;
    
    
    gamePlayStart = () =>{
        this.gameID =setInterval(this.gravity,1000);
            this.gameID =setInterval(this.gamePlay,100);
           //to rzeba zmienic, tylko tymczasowo tak jest
            
    };
    gamePlayStop = () => clearInterval(this.gameID);
        
    isLocked = () =>{if(this.state.blockGravity>3){
           this.setState({gameBoard: this.state.board})
           console.log(this.state.board+"       "+this.state.gameBoard);
          // this.gamePlayStop();
           this.resetPlayer();
          return true;
          
        }
        //console.log("kondiszon "+ this.state.blockGravity+" "+this.state.board+"  "+this.state.gameBoard);
    } 

  resetPlayer=()=>{
      
   this.setState({blockGravity:  -1});
   this.setState({blockHorizontalPos:  4});
    };
        
    //te poniżej chyba już są ok
    drawA= (props) => props.randomBlock.forEach((row, y) =>
        row.forEach((blockColor, x) => {
            if (blockColor !==0){
                let yPos = (y+props.y)
                let xPos = (x+props.x)
                this.updateBoard(yPos,xPos,blockColor)
            }
        }))
        updateBoard = (yPos,xPos,blockColor) => {

        const newBoard = this.state.board.map((row, y) => row.map((value, x) => {
            if ((y === yPos) && (x === xPos)) {return value =blockColor}
             else return value;
        }));
        //console.log("x: "+this.state.offsetX+  " y "+this.state.offsetY+ "grav "+this.state.gravity)
        this.setState({ board: newBoard });
        //console.log( "konsola"+this.state.board+"  "+this.state.gameBoard);
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
                
            </Layout>
        )
    }
}



export default App;
