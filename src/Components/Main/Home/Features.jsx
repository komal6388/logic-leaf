import React from "react";
import {
  FaUserCheck,
  FaLightbulb,
  FaShieldAlt,
  FaCode,
  FaBug,
} from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const features = [
  {
    title: "UX Driven Engineering",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <FaUserCheck />,
  },
  {
    title: "Developing Shared Understanding",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <MdGroups />,
  },
  {
    title: "Proven Experience and Expertise",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <FaLightbulb />,
  },
  {
    title: "Security & Intellectual Property (IP)",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Code Reviews",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <FaCode />,
  },
  {
    title: "Quality Assurance & Testing",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: <FaBug />,
  },
];

export default function Features() {
  return (
    <section className=" py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex  flex-col  gap-4">
                <div className="flex items-center justify-center w-fit rounded-full  p-2 bg-indigo-50 text-indigo-600 text-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
