import { useState } from "react"
import { useDispatch } from "react-redux"
import { postTaskToServer } from "./features/bookslice"



const BookFun = ()=>{

   const [bookname,setBookName] = useState()
   const [price,setPrice] = useState()

   const dispatch = useDispatch()
    

   const HandleSubmit = ()=>{
    if(bookname.length === 0 && price.length === 0){
      return alert("Please Enter Data")
    }else{
      dispatch(postTaskToServer({bookname,price}))
      setBookName("")
      setPrice("")
     
    }
    
   }
   
    return(
        <div className="inputbox">
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="Enter Book Name" value={bookname} onChange={(e)=>setBookName(e.target.value)} className="bookname"/>
        <input type="text" placeholder="price" className="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit" className="addbtn" onClick={HandleSubmit}>Add</button>
        </form>
        </div>
    )
}

export default BookFun