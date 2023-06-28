import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import notesSlice from "./slices/notesSlice";
export default configureStore({
    reducer:{
        messageReducer:messageSlice,
        notesReducer:notesSlice
    }
})