import Link from 'next/link'
import React from 'react'
import Contextform from './components/Contextform'
import ContextTable from './components/ContextTable'
import { StudentProvider } from '@/todo/StudentContext'

const ContextRegistration = () => {
  return (
   <>
    <Link href="/">
          <h1 className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-all m-3"> Back to Home</h1>
        </Link>
        <section>
          <StudentProvider>
            <Contextform/>
          <ContextTable/>
          </StudentProvider>
          
        </section>
   </>
  )
}

export default ContextRegistration