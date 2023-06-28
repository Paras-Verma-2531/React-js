// if whole store is considered to be a pie then, slice is a seperate portion of it:
// Each slice represents sepereate virtual area for different componenets data:
import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
const messageSlice=createSlice(
    {
        name:"messageSlice",
        initialState:{message:""},
        reducers:{
            setMessage:(state,action)=>{
                //setMessage is our reducer which will take state and action -->" newly data"
                state.message=action.payload;// change the state with action.payload
            }
        }
        
    }
)
export const{setMessage}=messageSlice.actions;
export default messageSlice.reducer;// no matter how many methods we have in reducers we only need to export one reducer