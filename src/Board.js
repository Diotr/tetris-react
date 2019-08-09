import React from 'react';
class Board extends React.Component{
  render(){
  return (
   <div>
     {this.props.board.map((row,y)=>
       row.map((value,x)=>{
         
         const style ={
          top: (y*40) , left: (x*40),
          backgroundColor: 'red'
         }
         if(value===0){style.backgroundColor = 'blue'}
         return(<div className = "block" style = {style}></div>)
       })
     )}
   </div>
  );
}}
export default Board;