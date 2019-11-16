import React from 'react';

 
const buttons = (props) =>{
  
  return(  
    <div>
   
    
    <button onClick = {()=>props.start()}>new game</button>
    <button onClick = {()=>props.dropStop()}>stop</button>
    <button id='pauseButton'value = "resume" onClick = {()=>props.pause()}>pause</button>
    </div>
  );
};

export default buttons;