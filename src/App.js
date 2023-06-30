
import { useState } from 'react';
import './App.css';
import BookFun from './Bookfun';
import Header from './Header';
import TableData from './TableData';
import AppModal from "./Updated" 



function App() {
  
  const [Modal,setModal] = useState()

 

  
 
  return (
    <>
    <Header/>
    <div className='data'>
    <BookFun />
    <TableData Modal={Modal} setModal={setModal} />
    <AppModal Modal={Modal} setModal={setModal}/>
    </div>
    </>
  );
}

export default App