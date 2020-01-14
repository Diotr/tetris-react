import React from 'react';

const score = (props) =>(
  <div>
    <h1>{props.gameover}</h1>
    <label className='scoreLabel'>score</label>
    <h2>{props.totalScore}</h2>
    <h3>level</h3>
    <p>{props.level}</p>
    <h3>lines</h3>
    <p>{props.linesTotal}</p>
  </div>
);

export default score;