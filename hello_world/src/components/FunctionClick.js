import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked');
        
    }
  return (  
    <>
        {/* Never use functioncall assigned to clickHandler, Just the function name do the work perfectly */}
        <button onClick={clickHandler}>Click</button>
    </>
  ) 
}

export default FunctionClick    