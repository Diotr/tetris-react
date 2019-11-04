import React from 'react';
import Buttons from '../Controls/Buttons/Buttons';
import Score from '../Controls/Display/score';
import './controls.css';

const controls = (props) =>(
<div>
    <div><p>display</p></div>
    <div><p>buttons</p>{props.buttons}</div>
    <button onClick = {()=>props.start()}>start</button>
    <button onClick = {()=>props.dropStop()}>stop</button>
    <h1>{props.score}</h1>
    <Buttons button/>
    <Score score/>
</div>

);
export default controls;