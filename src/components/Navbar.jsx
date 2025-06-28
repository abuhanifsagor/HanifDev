import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex gap-4 dark:bg-gray-900">
    <NavLink to="/" className="font-semibold">Home</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);
export default Navbar;
