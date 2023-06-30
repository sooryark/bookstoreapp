import React from "react";
import { useSelector } from "react-redux";


const Header = ()=>{

    const {taskList,error} = useSelector((state)=>state.taskArr)


    return(
        <>
        <h1 className="header">Book Store App</h1>
        {
            error &&  <p className="error">{error}</p>
        }
       
        <p className="taskslength">No of Books  {`${taskList.length}`}</p>
       
        </>
    )
}


export default Header