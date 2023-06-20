import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count,setCount]=useState(0)
    // this method is used to capture states of react lifecycle like : mount--update--unmount
    useEffect(()=>{
        console.log("counter updated");
        // when passed with empty array it runs only once when component  is mounted i,e initial render
    },[])
  return (
    <div>
        <p>The value of count is: {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
export default UseEffectHook