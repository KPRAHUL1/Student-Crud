import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [],
    editableStudent: null,
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push({ id: Date.now(), ...action.payload });
    },
    setEditableStudent: (state, action) => {
      state.editableStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
      state.editableStudent = null;
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    }
  }
});

export const {
  addStudent,
  setEditableStudent,
  updateStudent,
  deleteStudent
} = studentSlice.actions;

export default studentSlice.reducer;
