import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../todo/todoSlice'

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
})

