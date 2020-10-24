import React from 'react'

const name = 'I am a onlick function'

function test(){

    alert("Test Direct Call  Execution function");
}
function test1() {
    
    alert(name);
}

var x=10;
function test2(){
    x++;
    alert(x)
}


function Demo() {
    return (
        <div>
            <button onClick={ () =>{ alert("Welcome"); } }>In Line fuction </button>
            <button onClick={ test() }>Test Direct Call  Execution function</button><br/>
            <button onClick={ test1 }>OnClick function</button>
            <button onClick={ test2 }>Counter</button>
        </div>
    )
}

export default Demo

