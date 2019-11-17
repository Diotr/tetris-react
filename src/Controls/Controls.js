import React from 'react';
import Buttons from '../Controls/Buttons/Buttons';
import Score from '../Controls/Display/score';
import './controls.css';

const controls = (props) =>(
<div >

    <div className = 'score'>
    <Score 
    gameover = {props.gameover}
    totalScore = {props.totalScore}
     level = {props.level}
     linesTotal = {props.linesTotal} />
    </div>

    <div className = "buttons">
        <Buttons 
        start={props.start} 
        dropStop = {props.dropStop}
        pause={props.pause}
        />
        
        </div>
</div>

);
export default controls;