import { createSlice} from '@reduxjs/toolkit';
const notesSlice=createSlice(
    {
       name:"notesSlice",
       initialState:{
           notes:[] // empty array for notes
        },
       reducers:{
           createNote:(state,action)=>{ // data is in action.payload
               //Used Earlier:::
              // state.notes=[...state.notes,action.payload]//make new array with previous notes + curr note:
              // but with toolkit :
              state.notes.push(action.payload);// still preserves the previous notes
            },
            deleteNote:(state,action)=>
            {
                //  filter all the notes having id !=action.payload i,e id to be deleted
                state.notes=state.notes.filter( note=>note.id!=action.payload)
            }
       }
       
    }
)
export default notesSlice.reducer;
export const {createNote,deleteNote}=notesSlice.actions;