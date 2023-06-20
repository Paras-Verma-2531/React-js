// User form Component to learn more about the Inputs,Hooks::
// Another type of hook is UseRef which is same like UseState but it does not allow re-rendering:
//  they are mostly used with DOM elements and can be seen as a alternative to 'document.getElementById'
import React, { useRef, useState } from 'react'
function UserForm() {
    // const[name,setName]=useState('');
    // const nameInput=document.getElementById('name').value :: not recommended in react
    // thereby use :: useRef
    const nameInputRef=useRef(null);
    function accessName(event)
    {
        event.preventDefault();
        
    }
   return (
    <form>
        <label htmlFor='name'>Name : </label>
        <input type="text" ref={nameInputRef}/>
        <button onClick={accessName}>Submit</button>
    </form>
  )
}
export default UserForm