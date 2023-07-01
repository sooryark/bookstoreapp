import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTaskToserver } from "./features/bookslice"


const AppModal = ({Modal,setModal})=>{

  const [bookname,setBookName] = useState()
  const [price,setPrice] = useState()
  const [id,setId] = useState(0)

   const dispatch = useDispatch()

   const {selectedTask} = useSelector((state)=>state.taskArr)


   useEffect(()=>{
    if(Object.keys(selectedTask.length !==0)){
      setBookName(selectedTask.bookname)
      setPrice(selectedTask.price)
      setId(selectedTask.id)
    }
   },[selectedTask])


   const updateTaskfn = ()=>{
    dispatch(updateTaskToserver({id,bookname,price}))
    setModal(false)
   }



 return(
  <>
  {
    Modal &&   
    <div className="col-12 d-flex flex-column align-items-center position-absolute top-50">
    <div className="box">     
    <h1>update</h1>
    <div className="mb-2 w-50">
      <label htmlFor="bookname" className="form-label">Enter your Book Name</label>
      <input type="text" className="form-control border-primary" id="bookname" value={bookname} onChange={(e)=>setBookName(e.target.value)}/>
      </div>
      <div className="mb-4 w-50">
     <label htmlFor="price" className="form-label">Enter your Price</label>
     <input type="text" className="form-control border-primary" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
     <div className="d-flex gap-2 my-2 justify-content-center">
     <button className="btn btn-primary btn-sm" onClick={updateTaskfn}>Update</button>
     <button className="btn btn-danger btn-sm" onClick={()=>setModal(false)}>Close</button>
     </div>
     </div>
     </div>
  </div>
  }

  </>
 )
}

export default AppModal