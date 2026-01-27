import React from 'react'
import buildimg from "../../../assets/wayofbuild/build1.png"
import { FaRegUser } from "react-icons/fa";

export default function Building_Software() {
    return (
        <>
         <div className="wayto-build-card md:p-4 p-5  my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                {/* Left Content */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Build the right team to scale
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Finding the right talent is not easy. We help you find the talent
                        that suits your needs, follows your processes, and sticks with
                        you long term. We work with freelancers globally.
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Our delivery model helps you cut costs and deliver within budget.
                    </p>

                    {/* Highlight Box */}
                    <div className="p-4 highlight-line my-4">
                        <p className="text-sm  leading-relaxed">
                            “Senrion is quick to identify target personas with the
                            right skill sets we needed to expand our expertise to build
                            meaningful products.”
                        </p>
                    </div>

                    <div className="flex wayto-build-user items-center gap-1.5">
                        < FaRegUser className="text-amber-50 rounded-full bg-purple-700 p-1.25 " size={30} />
                        <span className="text-sm font-semibold text-gray-900">
                            Jessa Macaran <br />CEO
                        </span>
                    </div>
                    
                </div>

                {/* Right Image */}
                <div className="w-full h-full">
                    <img
                        src={buildimg}
                        alt="Team discussion"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
         <div className="wayto-build-card md:p-4 p-5  my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                 <div className="w-full h-full">
                    <img
                        src={buildimg}
                        alt="Team discussion"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Left Content */}
                <div className='md:p-4' >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Build the right team to scale
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Finding the right talent is not easy. We help you find the talent
                        that suits your needs, follows your processes, and sticks with
                        you long term. We work with freelancers globally.
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Our delivery model helps you cut costs and deliver within budget.
                    </p>

                    {/* Highlight Box */}
                    <div className="p-4 highlight-line my-4">
                        <p className="text-sm  leading-relaxed">
                            “Senrion is quick to identify target personas with the
                            right skill sets we needed to expand our expertise to build
                            meaningful products.”
                        </p>
                    </div>

                    <div className="flex wayto-build-user items-center gap-1.5">
                        < FaRegUser className="text-amber-50 rounded-full bg-purple-700 p-1.25 " size={30} />
                        <span className="text-sm font-semibold text-gray-900">
                            Jessa Macaran <br />CEO
                        </span>
                    </div>
                    
                </div>

                
               

            </div>
        </div>
         <div className="wayto-build-card md:p-4 p-5 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                {/* Left Content */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Build the right team to scale
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Finding the right talent is not easy. We help you find the talent
                        that suits your needs, follows your processes, and sticks with
                        you long term. We work with freelancers globally.
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Our delivery model helps you cut costs and deliver within budget.
                    </p>

                    {/* Highlight Box */}
                    <div className="p-4 highlight-line my-4">
                        <p className="text-sm  leading-relaxed">
                            “Senrion is quick to identify target personas with the
                            right skill sets we needed to expand our expertise to build
                            meaningful products.”
                        </p>
                    </div>

                    <div className="flex wayto-build-user items-center gap-1.5">
                        < FaRegUser className="text-amber-50 rounded-full bg-[#B13A7E] p-1.25 " size={30} />
                        <span className="text-sm font-semibold text-gray-900">
                            Jessa Macaran <br />CEO
                        </span>
                    </div>
                    
                </div>

                {/* Right Image */}
                <div className="w-full h-full">
                    <img
                        src={buildimg}
                        alt="Team discussion"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
        </>
       
    )
}
