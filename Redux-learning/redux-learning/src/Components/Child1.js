import React, { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { setMessage } from '../Redux/slices/messageSlice';
function Child1() {
    const inputRef=useRef(null);
    const dispatch=useDispatch();
    function handleSubmit(event)
    {
       event.preventDefault();
       const inputData=inputRef.current.value;
       dispatch(setMessage(inputData));// pass the payload i,e actual data to the setMesaage action
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}/>
    </form>
    </>
  )
}
export default Child1