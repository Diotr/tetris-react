import React from 'react';


const buttons = (props) =>(
    <div>
   
    
    <button onClick = {()=>props.start()}>start</button>
    <button onClick = {()=>props.dropStop()}>stop</button>
    </div>
);

export default buttons;