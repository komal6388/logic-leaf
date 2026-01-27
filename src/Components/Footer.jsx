
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">LOGIC LEAF</h2>
          <p className="text-sm leading-relaxed">
            We provide cutting-edge IT solutions including web development,
            cloud services, cybersecurity, and digital transformation.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="md:text-left text-center" >
          <h3 className="text-lg font-semibold text-white  mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Web Development</li>
            <li className="hover:text-white transition">Mobile App Development</li>
            <li className="hover:text-white transition">Cloud Solutions</li>
            <li className="hover:text-white transition">Cyber Security</li>
            <li className="hover:text-white transition">UI/UX Design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:text-left text-center" >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Careers</li>
            <li className="hover:text-white transition">Projects</li>
            <li className="hover:text-white transition">Blog</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:text-left text-center" >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm md:text-left text-center">
            <li className="flex items-center md:justify-start justify-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              Mumbai, India
            </li>
            <li className="flex items-center md:justify-start justify-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              +91 98765 43210
            </li>
            <li className="flex items-center md:justify-start justify-center gap-3">
              <FaEnvelope className="text-blue-500" />
              info@technova.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LogicLeaf IT Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
