import React from 'react';

const score = (props) =>(
    <div>
    <label>score</label>
    <h1>score = {props.totalScore}</h1>
    <p>level = {props.level}</p>
    <p>lines = {props.linesTotal}</p>
    </div>
);

export default score;