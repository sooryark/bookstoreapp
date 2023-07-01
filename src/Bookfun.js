import { useState } from "react"
import { useDispatch } from "react-redux"
import { postTaskToServer } from "./features/bookslice"



const BookFun = ()=>{

   const [bookname,setBookName] = useState()
   const [price,setPrice] = useState()

   const dispatch = useDispatch()
    

   const HandleSubmit = ()=>{
    if(bookname !== "" && price !== ""){
      dispatch(postTaskToServer({bookname,price}))
      setBookName("")
      setPrice("")
    }else{
      return alert("Please Enter Data")
    }
    
   }
   
    return(
      <div className="d-flex flex-column align-items-center w-100 col-12">
      <div className="mb-3 w-50">
      <label htmlFor="bookname" className="form-label">Enter your Book Name</label>
      <input type="text" className="form-control border-primary" id="bookname" value={bookname} onChange={(e)=>setBookName(e.target.value)}/>
      </div>
      <div className="mb-3 w-50">
     <label htmlFor="price" className="form-label">Enter your Price</label>
     <input type="text" className="form-control border-primary" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
     <div className="text-center">
     <button className="btn btn-success my-2" onClick={HandleSubmit}>Add Item</button>
     </div>
     
       </div>
       </div>
       
      
          
       
       
       

    )
}

export default BookFun