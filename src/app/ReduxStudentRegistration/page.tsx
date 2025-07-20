'use client'
import React from 'react'
import StudentForm from '../ReduxStudentRegistration/components/StudentForm'
import StudentTable from '../ReduxStudentRegistration/components/StudentTable'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { store } from '../store'

const ReduxStudent = () => {
  return (
    <>
     <Link href="/">
          <h1 className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-all m-3"> Back to Home</h1>
        </Link>
        <Provider store={store}> 
          <StudentForm/>
    <StudentTable/>
    </Provider>
    </>
  )
}

export default ReduxStudent