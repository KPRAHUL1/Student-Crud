import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'student',
    initialState:{
        students: []
    },
    reducers:{
        addStudent: (state, action) => {    
            state.students.push(action.payload);
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload.id);
        }
    }
})
export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;