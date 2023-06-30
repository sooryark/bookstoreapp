import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTaskToserver } from "./features/bookslice"


const AppModal = ({Modal,setModal}) =>{


 const {selectedTask} = useSelector((state)=>state.taskArr)

  const [bookname,setBookName] = useState()

  const [price,setPrice] = useState()
  
  const [id,setId] = useState(0)

  const dispatch = useDispatch()

  const updatedEl = ()=>{
    dispatch(updateTaskToserver({id,bookname,price}))
    setModal(false)
  }

  useEffect(()=>{
      if(Object.keys(selectedTask).length !== 0){
        setBookName(selectedTask.bookname)
        setPrice(selectedTask.price)
        setId(selectedTask.id)
      }
  },[selectedTask])

  return(
    <div className="modal">
    {
      Modal &&
      <div className="box">
        <h2 className="updateval">Update Data</h2>
      <input
    type="text"
    placeholder="Enter your Task"
    value={bookname}
    onChange={(e)=>setBookName(e.target.value)}
  />
  <br />
  <input
    type="text"
    placeholder="Enter your Description"
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
  />
  <br />
  <button className="addbtn" onClick={updatedEl}>
    Update
  </button>
<button className="closebtn" onClick={()=>setModal(false)}>Close</button>
</div>
    }
  
</div>)

}


export default AppModal