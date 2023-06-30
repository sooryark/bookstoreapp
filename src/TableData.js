import { useDispatch,useSelector} from "react-redux"
import { deleteTaskfromServer, getTaskFromServers,removeTask,selectedTaskFn } from "./features/bookslice"
import { useEffect } from "react"

const TableData = ({Modal,setModal})=>{

    const {taskList} = useSelector((state)=>state.taskArr)
     console.log(taskList)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTaskFromServers())
    },[dispatch])

    const EditTask = (newDataVal)=>{
        setModal(true)
        dispatch(selectedTaskFn(newDataVal))
    }

    const DeleteEl = (newDataVal)=>{
        dispatch(deleteTaskfromServer(newDataVal))
        .unwrap().then(()=>{
            dispatch(removeTask(newDataVal))
        })
    }

    return(
        <>
        {
            taskList ?
           ( <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Book Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
         </thead>
        <tbody>
            {
                taskList && taskList.map((newDataVal,index)=>
                 (
                    <tr key={newDataVal.id}>
                    <td>{index+1}</td>
                    <td>{newDataVal.bookname}</td>
                    <td>Rs- ₹ {newDataVal.price} only</td>
                    <td>
                        <button className="editbtn" onClick={()=>EditTask(newDataVal)}>Edit</button>
                        <button className="deletebtn" onClick={()=>DeleteEl(newDataVal)}>Delete</button>
                    </td>
                        
                   </tr>
                ))
                
               
            }
                   
        </tbody>
           
        </table>): 
        <h1 className="Error">Your BookList is Empty</h1>
        }
        
        </>
    )
}


export default TableData