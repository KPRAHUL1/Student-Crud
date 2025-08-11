import React from 'react'
import { useForm } from 'react-hook-form'

const Contextform = () => {
    const {register, handleSubmit,formState:{errors}}=useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <>
    <div>
        <h1>Student Information Collection Form</h1>
        <h2>General Information</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
             <label htmlFor="studentName">Student Name:</label>
            <input type="text" id="studentName" {...register("name", { required: "Name is required" })} placeholder="Name" />
            
            </div> 
            <div>
             <label htmlFor="studentName">Email:</label>
            <input type="email" id="studentName" {...register("email",{required:"Email is Required"})} placeholder='Email'/>
            </div> 
            <div>
             <label htmlFor="studentName">Phone Number:</label>
            <input type="number" id="studentName" {...register("phone",{required:"Phone Number is Required",minLength:{value:10,message:"Phone Number must be 10 digits"}})} placeholder='Phone Number'/>
            </div> 
            <div>
             <label htmlFor="studentName">Birth Date:</label>
            <input type="date" id="studentName" {...register("birthDate",{required:"Birth Date is Required"})} placeholder='Birth Date' />
            </div> 
            <div>
             <label htmlFor="studentName">Gender:</label>
            <select id="gender" {...register("gender", { required: "Gender is required" })}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div> 
            <div>
             <label htmlFor="studentName">Student id:</label>
            <input type="text" id="studentId" {...register("studentId", { required: "StudentId is required" })} />
            </div> 
            <div>
             <label htmlFor="studentName">Entry Year:</label>
            <input type="text" id="Entry Year" {...register("entryYear", { required: "Entry Year is required" })} />
            </div> 
            <div>
             <label htmlFor="studentName">Grade:</label>
            <input type="text" id="Grade" {...register("grade", { required: "Grade is required" })} />
            </div> 
            <div>
             <label htmlFor="studentName">Semester:</label>
            <input type="text" id="Semester" {...register("semester", { required: "Semester is required" })} />
            </div> 
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Contextform