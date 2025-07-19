'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Student CRUD (Simple)", href: "/student-basic" },
  { label: "Student CRUD (Redux)", href: "/student-redux" },
  { label: "Student CRUD (Context)", href: "/student-context" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 hidden sm:block fixed">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "block px-4 py-2 rounded-md font-medium hover:bg-indigo-100",
              pathname === item.href ? "bg-indigo-200 text-indigo-800" : "text-gray-700"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
