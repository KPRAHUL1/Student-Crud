import StudentForm from "./StudentRegistration/StudentForm";

export default function Home() {
  return (
    <>
  <div className="flex flex-col items-center  bg-gray-100 gap-6">
    <h1 className="text-3xl font-bold">Student Management System</h1>
    <StudentForm/>
    </div>  
    </>
  );
}
