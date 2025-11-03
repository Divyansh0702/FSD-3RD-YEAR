import React from 'react';

function UseState(){
    
    function change(){
        console.log(document.writeln("Button Clicked"));
    }
    return(
        <div>
            <button onClick={change}> Click </button>
        </div>
    )
}

export default UseState;