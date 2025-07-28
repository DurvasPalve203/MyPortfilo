// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
  { name: "Admin", path: "/admin" },
];

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-white shadow">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
