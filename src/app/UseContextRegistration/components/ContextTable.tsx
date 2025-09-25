"use client";
import { useStudentContext } from "@/todo/StudentContext";
import React from "react";
// import { useStudentContext } from "./StudentContext";

const ContextTable = () => {
  const { students, deleteStudent } = useStudentContext();

  return (
    <div className="max-w-6xl mb-10 mx-auto mt-10 bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">Student Records</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Birth Date</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Student ID</th>
              <th className="px-4 py-3 text-left">Entry Year</th>
              <th className="px-4 py-3 text-left">Grade</th>
              <th className="px-4 py-3 text-left">Semester</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((s) => (
                <tr key={s.studentId} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3">{s.phone}</td>
                  <td className="px-4 py-3">{s.birthDate}</td>
                  <td className="px-4 py-3">{s.gender}</td>
                  <td className="px-4 py-3">{s.studentId}</td>
                  <td className="px-4 py-3">{s.entryYear}</td>
                  <td className="px-4 py-3">{s.grade}</td>
                  <td className="px-4 py-3">{s.semester}</td>
                  <td className="px-4 py-3 flex gap-3 justify-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium"> Edit</button>
                    <button
                      onClick={() => deleteStudent(s.studentId)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                       Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="px-4 py-6 text-center text-gray-500">
                  No students added yet 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContextTable;
