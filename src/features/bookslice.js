import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const API_URL = "http://localhost:8000/dataitems";
//GET Method

export const getTaskFromServers = createAsyncThunk(
    "tasks/getTaskFromServers",
 async (_,{rejectWithValue}) =>{
           const response = await fetch(API_URL);
           if(response.ok){
            const data = await response.json()
            return data
           }else{
             return rejectWithValue({error:"Error! No Data Found"})
           }
    }
)

//POST method


export const postTaskToServer = createAsyncThunk(
    "tasks/postTaskToServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:"POST",
            headers:{
                "Content-type":"application/json;charset = UTF-8"
            },
            body:JSON.stringify(task)
        }
        const response = await fetch(API_URL,options)
        if(response.ok){
            const data = response.json()
            console.log(task)
            return data
        }else{
            return rejectWithValue({error:"Error! Book Not Added"})
        }
    }
)


//Update Method

export const updateTaskToserver = createAsyncThunk(
    "tasks/updateTaskToserver",
   async (task,{rejectWithValue}) => {
    const options = {
        method:"PATCH",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify(task)
    }
    const newURL = `${API_URL}/${task.id}`
    const response = await fetch(newURL,options)
    if(response.ok){
        const data = await response.json()
        console.log(data)
        return data
    }else{
        return rejectWithValue({error:"Book Not Updated"})
    }
   }
)


//DELETE method

export const deleteTaskfromServer = createAsyncThunk(
    "tasks/deleteTaskfromServer",
   async (task,{rejectWithValue})=>{
    const options = {
        method:"DELETE"
    }
     const deleteUrl = `${API_URL}/${task.id}`
         const response = await fetch(deleteUrl,options)
         if(response.ok){
             const data = await response.json()
             return data
         }else{
            return rejectWithValue({error:"Book Not Deleted"})
         }
    }
)

export const bookSlice = createSlice({
    name:"bookSlice",
    initialState:{
    taskList : [],
    selectedTask:{},
    isLoading:false,
    error:""
    },
    reducers:{
        addTask:(state,action)=>{
           const id = Math.random() * 100;
           let task = {...action.payload,id}
           console.log(action.payload)
        },
        removeTask:(state,action)=>{
            state.taskList = state.taskList.filter((tasks)=>tasks.id !== action.payload.id)
            console.log(state.taskList)
        },
        updatedTask:(state,action)=>{
             state.taskList = state.taskList.map((tasks)=>tasks.id === action.payload.id ? action.payload : tasks)
        },
        selectedTaskFn:(state,action)=>{
          state.selectedTask = action.payload
        }

    },
    extraReducers:(builder) => {
        builder
            .addCase(getTaskFromServers.pending,(state) => {
                state.isLoading = true
            })
            .addCase(getTaskFromServers.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.taskList = action.payload
            })
            .addCase(getTaskFromServers.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
                state.taskList = []
            })
            .addCase(postTaskToServer.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(postTaskToServer.fulfilled,(state,action)=>{
                state.isLoading = false
                state.taskList.push(action.payload)
                state.error = ""
                console.log(action)
            })
            .addCase(postTaskToServer.rejected,(state,action)=>{
                state.isLoading = false
                state.error = action.payload.error
            })
            .addCase(updateTaskToserver.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(updateTaskToserver.fulfilled,(state,action)=>{
                state.isLoading = false
                state.taskList = state.taskList.map((tasks)=>tasks.id === action.payload.id ? action.payload : tasks)
                state.error = ""
            })
            .addCase(updateTaskToserver.rejected,(state,action)=>{
                state.error = action.payload.error
                state.isLoading = false 
            })
            .addCase(deleteTaskfromServer.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(deleteTaskfromServer.fulfilled,(state)=>{
                state.isLoading = false
                state.error = ""
            })
            .addCase(deleteTaskfromServer.rejected,(state,action)=>{
                state.isLoading = false
                state.taskList = []
                state.error = action.payload.error
            })
    }

})


export const {addTask,removeTask,updatedTask,selectedTaskFn} = bookSlice.actions

export default bookSlice.reducer