import React from 'react';

 
const buttons = (props) =>{
  
  return(  
    <div>
   
    <div>
    <button onClick = {()=>props.start()}>new game</button>
    </div>
    <div>
    <button id='pauseButton'value = "resume" onClick = {()=>props.pause()}>pause</button>
    </div>
    </div>
  );
};

export default buttons;