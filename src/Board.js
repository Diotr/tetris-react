import React from 'react';
class Board extends React.Component{
  render(){
  return (
   <div>
     {this.props.board.map((row,y)=>
       row.map((value,x)=>{
         
         const style ={
          top: (y*40) , left: (x*40),
         // backgroundColor: 'red',
         background: 'linear-gradient(#e66465, #9198e5)'
          
         }
         if(value===0){style.background = 'linear-gradient(#c1d9e8, #a0cce8)'}
         else if (value ===1){style.background = 'linear-gradient(#4432a8, #a83248)'}
         else if (value ===2){style.background = 'linear-gradient(#0d174f, #a83248)'}
         else if (value ===3){style.background = 'linear-gradient(#064a04, #a83248)'}
         else if (value ===4){style.background = 'linear-gradient(#4a0411, #a83248)'}
         else if (value ===5){style.background = 'linear-gradient(#4432a8, #4a0411)'}
         //console.log("row: "+row+"x: "+x+"y: "+y);
         return(<div className = "block" style = {style}></div>)
       })
     )}
   </div>
  );
}}
export default Board;