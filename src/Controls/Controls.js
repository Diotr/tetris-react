import React from 'react';
import Buttons from '../Controls/Buttons/Buttons';
import Score from '../Controls/Display/score';
import './controls.css';

const controls = (props) =>(
<div>
    
    
    
    <h1>{props.score}</h1>
    
    
    <div className = 'score'>
    <Score 
    totalScore = {props.totalScore}
     level = {props.level}
     linesTotal = {props.linesTotal} />
    </div>

    <div className = "buttons">
        <Buttons 
        start={props.start} 
        dropStop = {props.dropStop}
        />
        
        </div>
</div>

);
export default controls;