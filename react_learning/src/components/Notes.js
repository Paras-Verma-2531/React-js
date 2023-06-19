import React, { useState } from "react";
import SingleNote from "./SingleNote";
function Notes() {
  const [notes, setNotes] = useState([]); // understand it as :: notes initialized with empty []
  const [currNote, setCurrNote] = useState(""); // initialized with ' '
  function updateCurrNote(event) {
    setCurrNote(event.target.value); //pass the value of input to method which will update it to currNote
  }
  function addNote() {
    const newNotesArray = [...notes, currNote]; // destructure notes array and add curr notes
    setNotes(newNotesArray); // pass new notes to setNotes method
    //re-renders everytime create new element thus prev data needs to be stored
  }
  //JSX of Notes component
  return (
    <div>
      <input type="text" onChange={updateCurrNote} />
      <button onClick={addNote}>Submit</button>
      <ul className="NotesContainer">
        {/* creates new List with newly added notes 
        Array.map is used to modify each element of array and it returns the modified array*/}
        {notes.map((note) => {
          return (
            <li>
              <SingleNote note={note}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Notes;
