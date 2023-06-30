import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "./features/bookslice"

const store = configureStore({
    reducer:{
       taskArr:bookReducer
    }
})

export default store