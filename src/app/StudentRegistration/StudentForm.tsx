'use client'
import React, { useState } from 'react';
import StudentTable from './StudentTable';

export type StudentFormProps = {
  name: string;
  address: string;
  date: string;
  gender: string;
  number: string;
};

const StudentForm = () => {
  const [formData, setFormData] = useState<StudentFormProps>({
    name: '',
    address: '',
    date: '',
    gender: '',
    number: ''
  });

  const [data, setData] = useState<StudentFormProps[]>([]);

  const handleClick = () => {
    const { name, address, date } = formData;
    if (!name || !address || !date) {
      alert('Please fill all the fields');
      return;
    }

    setData([...data, formData]);

    setFormData({
      name: '',
      address: '',
      date: '',
      gender: '',
      number: ''
    });
  };

  const handleDelete = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  const handleEdit = (index: number) => {
    const studentToEdit = data[index];
    setFormData(studentToEdit);
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Student Registration Form</h2>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter address"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Gender</label>
          <select
            value={formData.gender}
            onChange={e => setFormData({ ...formData, gender: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label className="mb-1 font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            value={formData.number}
            onChange={e => setFormData({ ...formData, number: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter number"
          />
        </div>

        <div className="sm:col-span-2 text-center mt-4">
          <button
            type="button"
            onClick={handleClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-all"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Table */}
      <div className="mt-10">
        <StudentTable studentData={data} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default StudentForm;
