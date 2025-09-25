"use client";
import React, { createContext, useContext, useState } from "react";

type Student = {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  studentId: string;
  entryYear: string;
  grade: string;
  semester: string;
};

type StudentContextType = {
  students: Student[];
  addStudent: (student: Student) => void;
  editStudent: (id: string, updated: Student) => void;
  deleteStudent: (id: string) => void;
};

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: React.ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const editStudent = (id: string, updated: Student) => {
    setStudents((prev) =>
      prev.map((s) => (s.studentId === id ? { ...updated } : s))
    );
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.studentId !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, editStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error("useStudentContext must be used inside StudentProvider");
  return ctx;
};
