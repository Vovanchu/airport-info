import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white flex justify-around">
    <Link to="/">Головна</Link>
    <Link to="/flights">Розклад рейсів</Link>
    <Link to="/contact">Контакти</Link>
  </nav>
);

export default Navbar;