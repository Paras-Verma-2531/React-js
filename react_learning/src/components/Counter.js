// learning about states,props
import React, { useState } from "react";
export default function Counter() {
  // here useState can be considered as a function with default value as 0
  //  which returns array of some  react elements: first ele is the updated value,second is the method which will update
  //  and re-render the page:
  let [myfruit, setCount] = useState('Apple');
//   let [count, setCount] = useState(0);
  // function to increment count::
  let fruit='';
  function getValue(event)
  {
      fruit=event.target.value;
  }
  function incrementCount() {
    //   setCount(count+1);
    setCount(fruit);
  }
  // JSX
  return (
    <div>
      <p>The value of fruit is :{myfruit}</p>
      {/* though we change the value of count through eventListner
            but due to react functionality :: the components of react are not rendered again:
            therefore no change is seen on count::
            for this, state Hook was developed */}
            <input type="text" onChange={getValue}/>
      <button onClick={incrementCount}>Submit</button>
    </div>
  );
}
