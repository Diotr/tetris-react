import React from 'react';
import Buttons from '../Controls/Buttons/Buttons';
import Score from '../Controls/Display/score';

const controls = (props) =>(
<div>
    <div><p>display</p></div>
    <div><p>buttons</p>{props.buttons}</div>
    <button>button</button>
    <Buttons button/>
    <Score score/>
</div>

);
export default controls;