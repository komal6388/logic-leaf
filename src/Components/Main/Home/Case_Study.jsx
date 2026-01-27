import React from 'react'
import imagecard1 from "../../../assets/casestudy-bg/caseimg1.png"
import imagecard2 from "../../../assets/casestudy-bg/caseimg2.png"
import imagecard3 from "../../../assets/casestudy-bg/caseimg3.png"
import { FaArrowRight } from "react-icons/fa";
export default function Case_Study() {
    const CASE_STUDIES_DATA = [
        {
            id: 101,
            title: "Website Design for SCFC Canada",
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
            themeColor: "bg-[#F1F2FF]", // Light Blue
            image: imagecard1,

        },
        {
            id: 102,
            title: "Website Design for SCFC Canada",
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
            themeColor: "bg-[#F0FFF7]", // Light Green
            image: imagecard2,
            link: "/case-studies/scfc-green"
        },
        {
            id: 103,
            title: "Website Design for SCFC Canada",
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
            themeColor: "bg-[#FFF0F6]", // Light Pink
            image: imagecard3,
            link: "/case-studies/scfc-pink"
        }
    ];
    return (
        <>
            <div className="case-study-con-parent container mx-auto mt-15  lg:px-50">
                {
                    CASE_STUDIES_DATA.map((ele) => {
                        return <div key={ele.id} className={`case-study-card ${ele.themeColor}`}>

                            <div className="grid  grid-cols-12">
                                <div className="md:col-span-6 col-span-12">
                                    <div className=" h-full case-study-imgwrapper">
                                        <img className=' h-full w-full' src={ele.image} alt="" />
                                    </div>

                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="case-study-text-parent   md:p-10 p-6">
                                        <h4 className='case-study-texthead ' >
                                            {ele.title}
                                        </h4>
                                        <p className='case-study-disc text-[14px] text-gray-600'>{ele.description}</p>
                                        <div className="case-study-btn-parent mt-6   ">
                                            <a
                                                href="#"
                                                className="right-icon-btn flex items-center justify-end gap-2 text-[14px]"
                                            >
                                                Know More <FaArrowRight size={15} />
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    })
                }
            </div>

        </>
    )
}
