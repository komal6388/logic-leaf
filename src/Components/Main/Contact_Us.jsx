import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset(); // clear form after submit
    };

    return (
        <section className="bg-linear-to-b md:h-[90vh] h-auto flex items-center from-[#faf7ff] to-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* komal */}

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl mb-2 font-bold text-gray-800">
                        Get in <span className="text-purple-600">Touch</span>
                    </h2>
                    <p className="text-gray-500  text-center">
                        Have a project in mind? Let’s talk and build something amazing together.
                    </p>
                </div>

                {/* Main Card */}
                <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-6 md:p-10">

                    {/* Left Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl m-0 font-semibold text-gray-800">
                            Contact Information
                        </h3>
                        <p className="text-gray-500 block my-4 ">
                            Reach out to us anytime. We usually respond within 24 hours.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                    <FaPhoneAlt />
                                </span>
                                <span className="text-gray-700">+91 98765 43210</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                    <FaEnvelope />
                                </span>
                                <span className="text-gray-700">info@yourcompany.com</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                    <FaMapMarkerAlt />
                                </span>
                                <span className="text-gray-700">Mumbai, India</span>
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-purple-50 border border-purple-100">
                            <p className="text-sm text-gray-600">
                                🚀 We help startups and businesses design, build, and scale digital products.
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    {...register("firstName", { required: "First name is required" })}
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastName", { required: "Last name is required" })}
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your project..."
                                {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message should be at least 10 characters",
                                    },
                                })}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
