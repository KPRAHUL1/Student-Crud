"use client";
import { useStudentContext } from "@/todo/StudentContext";
import React from "react";
import { useForm } from "react-hook-form";
// import { useStudentContext } from "./StudentContext";

type FormData = {
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

const ContextForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { addStudent } = useStudentContext();

  const onSubmit = (data: FormData) => {
    addStudent(data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10 border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
         Student Information Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("name")} placeholder="John Doe" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" type="email" {...register("email")} placeholder="example@email.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" type="number" {...register("phone")} placeholder="9876543210" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" type="date" {...register("birthDate")} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("gender")}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("studentId")} placeholder="STU12345" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Entry Year</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("entryYear")} placeholder="2024" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("grade")} placeholder="A+" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" {...register("semester")} placeholder="1" />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContextForm;
