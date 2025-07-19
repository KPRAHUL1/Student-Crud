'use client'
import React, { useState } from 'react'
import StudentTable from './StudentTable';
export  type StudentFormProps = {
  name: string;   
  address: string;
  date: string
  gender: string;
  number: string;
}
const StudentForm = () => {
  const [formDate,setFormDaa]= useState<StudentFormProps>({
    name:" ",
    address:" ",
    date:" ",
    gender:" ",
    number:" "
  })
  const [data , setData] = useState<StudentFormProps[]>([])
  const handleClick =()=>{
    if (formDate.name === "" || formDate.address === "" || formDate.date === "" ) {
      alert("Please fill all the fields");
      return;
    }
    else{
      setData([...data,formDate])
     
    }
  }
  
  
  return (
   <>
   <div className='border p-5 flex flex-col justify-center items-center gap-3'>
   <div className='flex gap-5 items-center'> 
    <label htmlFor="">Name:</label>
    <input
      type="text"
      className='border '
      value={formDate.name}
      onChange={e => setFormDaa({ ...formDate, name: e.target.value })}
    />
    </div>
    <div className='flex gap-5  items-center'>
      <label htmlFor="">Address:</label>
    <input type="text"  className='border '  onChange={e => setFormDaa({ ...formDate, address: e.target.value })}/>
    </div>
    <div className='flex gap-5  items-center'>
      <label htmlFor="">Date of Birth:</label>
    <input type="date"  className='border '  onChange={e => setFormDaa({ ...formDate, date: e.target.value })}/>
    </div>
    <div className='flex gap-5  items-center'>
      <label htmlFor="">Gender:</label>
      <select name="gender" id="gender"  className='border '  onChange={e => setFormDaa({ ...formDate, gender: e.target.value })}>
        <option  value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div className='flex  items-center gap-5'>
      <label htmlFor="" >Phone Number:</label>
    <input type="number"  className='border '  onChange={e => setFormDaa({ ...formDate, number: e.target.value })}/>
    </div>
    <button type='submit' onClick={handleClick}>Submit</button>
   </div>
   <StudentTable studentData={data}/>
   </>
  )
}

export default StudentForm