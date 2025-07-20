'use client'
import React from 'react'
import { addStudent } from "../../../todo/todoSlice";
import { useDispatch } from 'react-redux';
export type StudentFormProps = {
  name: string;
  email: string;
  birthDate: string;
  gender: string;
  phone: string;
  city: string;
};
const StudentForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState<StudentFormProps>({
    name: '',
    email: '',
    birthDate: '',
    gender:'',
    phone:'',
    city:'',
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.birthDate) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(addStudent(formData));
    setFormData({
      name: '',
      email: '',
      birthDate: '',
      gender:'',
      phone:'',
      city:'',
    });
  }
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Student Admission Form</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
          <input  value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
          <input  value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            type="date"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select  value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            name="gender"
            id="gender"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input  value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            type="tel"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <select  value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            name="city"
            id="city"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select City</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentForm
