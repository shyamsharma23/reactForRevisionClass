import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StudentList = () => {
const [studentData, setStudentData] = useState()

useEffect(()=>{
    const fetch = async ()=>{
        const result = await axios.get("http://localhost:9090/student")
        console.log(result.data);
        setStudentData(result.data)
    }
    fetch()
},[])

  return (studentData?
    (<table>
    <thead>
        <tr>
            <th>Student ID</th>
            <th>Student name</th>
            <th>Course</th>
        </tr>
    </thead>
    <tbody>
        { studentData.map((item)=>{
            return <tr key={item.studentId}>
            <td>{item.studentId}</td>
            <td>{item.stuName}</td>
            <td>{item.courseName}</td>
            <td><button onClick={()=>{
                //axios request and pass the id to the url 
                //http://localhost:9090/student/id
            }}>Delete</button></td>
        </tr>
        })

            
        }
       
    </tbody>
</table>):null
  )
       
    
}

export default StudentList
