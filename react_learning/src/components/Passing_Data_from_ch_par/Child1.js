import React, { useState } from "react";
//  this child will pass its data to parent through props with the help of callback
function Child1(props) {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
    props.updateCountInParent(count+1);
  }
  return (
    <div>
      <p>Value of count in child 1 : {count}</p>
     <button onClick={updateCount}>Increment</button>
    </div>
  );
}
export default Child1;
