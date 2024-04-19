import React, { useRef } from 'react'
import axios from 'axios'

const NavBar = () => {

  const name = useRef()
  const courseName = useRef()
  const id = useRef();


  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (courseName == null) {
      console.log("Course name");
      
    }
    let obj = {
      stuName: name.current.value,
      courseName: courseName.current.value,
      studentId: id.current.value
    }
  
   const result = await axios.post("http://localhost:9090/student", obj)
   console.log(result);
    
  }

  return (
    <div>
      <form action="POST" onSubmit={handleSubmit}>
        <div>

        <label htmlFor="name">Stduent name</label>
        <input type="text" id='name' placeholder='' ref={name}/>
        <div>

        <label htmlFor="course">Course</label>
        <input type="text" id='course' ref={courseName}/>
        </div>
        <div>
        <label htmlFor="stu_ID">Student ID</label>
        <input type="number" id='stu_ID' ref={id}/>
        </div>
        </div>
      <button>Create Student</button>
      </form>
    </div>
  )
}

export default NavBar
