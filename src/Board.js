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
         else if (value ===1){style.backgroundColor = 'green'}
         else if (value ===2){style.backgroundColor = 'yellow'}
         else if (value ===3){style.backgroundColor = 'purple'}
         else if (value ===4){style.backgroundColor = 'pink'}
         else if (value ===5){style.backgroundColor = '#03c6fc'}
         //console.log("row: "+row+"x: "+x+"y: "+y);
         return(<div className = "block" style = {style}></div>)
       })
     )}
   </div>
  );
}}
export default Board;