// Component to List the notes:
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../Redux/slices/notesSlice';
function ListNote() {
    // inorder to get notes we need to subscribe to it:
    const notesArray=useSelector(state=>state.notesReducer.notes)//fetch the notes array from notesSlice
    const dispatch=useDispatch();
    
  return (
    <div className="notes-container">
      {
          notesArray.map(note=>{
              return (
                <div className='note'>
                    <h3>{note.title}</h3> 
                    <p>{note.description}</p>
                    <button onClick={()=>{dispatch(deleteNote(note.id))}}>delete</button>
                </div>
              )
          })
      }
    </div>
  )
}
export default ListNote