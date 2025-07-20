import Link from "next/link";
import StudentForm from "../StudentRegistration/StudentForm"
export default function StudentBasic() {
  return (
    <>
    <Link href="/">
          <h1 className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-all m-3"> Back to Home</h1>
        </Link>
    <div>

        <StudentForm />
      
    </div>
    </>
    
  );
}
