import React from 'react';

const score = (props) =>(
    <div>
        <h1>{props.gameover}</h1>
    <label className='scoreLabel'>score</label>
    <h1>{props.totalScore}</h1>
    <h3>level</h3>
    <p>{props.level}</p>
    <h3>lines</h3>
    <p>{props.linesTotal}</p>
    </div>
);

export default score;