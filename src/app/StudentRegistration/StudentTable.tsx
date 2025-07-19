import React from 'react';
import { StudentFormProps } from './StudentForm';

type StudentTableProps = {
  studentData: StudentFormProps[];
};

const StudentTable = ({ studentData }: StudentTableProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="overflow-x-auto rounded-lg shadow ring-1 ring-gray-300">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-100 text-gray-800 uppercase tracking-wide text-xs font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">DOB</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Number</th>
              <th className="px-4 py-3 text-center" colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {studentData.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                <td className="px-4 py-3 whitespace-nowrap">{student.name}</td>
                <td className="px-4 py-3 whitespace-nowrap">{student.address}</td>
                <td className="px-4 py-3 whitespace-nowrap">{student.date}</td>
                <td className="px-4 py-3 whitespace-nowrap capitalize">{student.gender}</td>
                <td className="px-4 py-3 whitespace-nowrap">{student.number}</td>
                <td className="px-2 py-3 text-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all">
                    Delete
                  </button>
                </td>
                <td className="px-2 py-3 text-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-all">
                    Edit
                  </button>
                </td>
                <td className="px-2 py-3 text-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-all">
                    View
                  </button>
                </td>
              </tr>
            ))}
            {studentData.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-400">
                  No student data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
