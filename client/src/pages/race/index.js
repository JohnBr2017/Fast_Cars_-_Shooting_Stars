import React from 'react';
import Scorecard from "./Scorecard";
import Broadcast from "./Broadcast";

import './Race.css';

function Race() {
    return (
        <div className='raceBackground'>
            Race
            <Scorecard></Scorecard>
            <Broadcast></Broadcast>
        </div>
    )
}

export default Race