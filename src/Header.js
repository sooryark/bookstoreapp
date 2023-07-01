import React from "react";
import { useSelector } from "react-redux";


const Header = ()=>{

    const {taskList,error} = useSelector((state)=>state.taskArr)


    return(
        <>
        <h1 className="heading-4 text-center bg-primary text-white p-2">Book Store App</h1>
        {
            error &&  <p className="text-center text-danger">{error}</p>
        }
       
        <p className="h6 text-center text-warning  bg-light p-3">No of - Books added <span className="text-success"> {`${taskList.length}`}</span></p>
       
        </>
    )
}


export default Header