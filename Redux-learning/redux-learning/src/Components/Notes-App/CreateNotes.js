import { nanoid } from '@reduxjs/toolkit';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../../Redux/slices/notesSlice';

function CreateNotes() {
    const titleRef=useRef(null);// to reference the input
    const descriptionRef=useRef(null);
    const dispatch=useDispatch();
    function handleSubmit(event)// handles the submit event:
    {
       event.preventDefault();// prevents from reloading the form
       const title=titleRef.current.value;
       const description=descriptionRef.current.value;
       dispatch(createNote(
           {// pass the payload as object
               title, // title:title 
               description,
               id:nanoid(10) // method which gives unique hashvalue of given length
           }
       ))
    }
  return (
    <div className="notes-input">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" ref={titleRef}/>
            <input type="text" placeholder="description" ref={descriptionRef}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    </div>
  )
}
export default CreateNotes