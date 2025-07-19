import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6 p-6">
      <h1 className="text-4xl font-bold">Welcome to the Student Management System</h1>
      <p className="text-lg text-gray-600">Choose your favorite CRUD flavor </p>

      <div className="flex gap-4 mt-6">
        <Link href="/StudentRegistration">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Simple CRUD</button>
        </Link>
        <Link href="/student-redux">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">Redux CRUD</button>
        </Link>
        <Link href="/student-context">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Context CRUD</button>
        </Link>
      </div>
    </div>
  );
}
