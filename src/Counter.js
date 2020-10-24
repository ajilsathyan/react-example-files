import React from 'react'


var count = 100;
var countHour = 24;
function Counter() {
    count--;
    countHour--;
    return (
        <div>
            <h1>{count}</h1>
            <h1>{countHour}</h1>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter
