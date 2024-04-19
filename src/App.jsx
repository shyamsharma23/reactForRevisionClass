import Button from './components/Button'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import arr from './Images';
import StudentList from './components/StudentList';
import NavBar from './components/NavBar';


function App() {

  const [color, setColor] = useState(true)

 

  function handleClick(){
    setColor((prev)=>!prev)
  }

 
  return (
    <>
    <NavBar/>
    <div style={{background:`${color?"gray":"cyan"}`, height:"100%"}}>

      

      <h1>Click the button below:</h1>
      <button onClick={handleClick}>Change the background</button>

   <StudentList/>

    
    
    </div>
    </>
  )
}

export default App
