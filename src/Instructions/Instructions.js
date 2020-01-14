import React from 'react';
import './Instructions.css';

const Instructions = () =>{
      const style = {
        textAlign:'center',
        fontFamily:'xmasxpress3d;'
      }
  return(
         <div style = {style}>
           <h2> ↑</h2>
           <h2>rotate</h2>
           <h2>← move → </h2>
           <h2>drop</h2>
           <h2>↓</h2>
        </div>
    );
}
export default Instructions;