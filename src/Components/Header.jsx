import React, { useState } from "react";
import logo from "../assets/logiclogo.png";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white" id="header" >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-12.5 items-center">
            <li><NavLink to="/" className={({ isActive }) =>
              isActive ? "text-[#57007B] font-bold" : "text-gray-500"
            } >Home</NavLink></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Hire</a></li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <NavLink
          to="/contactus"
          className=" hidden md:inline-block section-btn px-4 py-2 rounded text-center"
        >
          Contact Us
        </NavLink>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Hire</a></li>

          <li>
            <a
              href="#"
              className="block section-btn px-4 py-2 rounded text-center"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
