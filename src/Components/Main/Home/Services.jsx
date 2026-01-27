import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Services() {


    const services = [
        {
            id: 1,
            title: "Mobile App Development",
            description:
                "Custom mobile applications built for performance, scalability, and great user experience.",
            icon: "📱",
        },
        {
            id: 2,
            title: "Web Design & Development",
            description:
                "Responsive and modern websites that reflect your brand and drive user engagement.",
            icon: "💻",
        },
        {
            id: 3,
            title: "Software Testing Service",
            description:
                "End-to-end testing solutions to ensure quality, security, and reliability.",
            icon: "🧪",
        },
        {
            id: 4,
            title: "UI / UX Design",
            description:
                "User-centered designs that create intuitive and visually appealing digital products.",
            icon: "🎨",
        },
        {
            id: 5,
            title: "Software Maintenance",
            description:
                "Continuous monitoring, updates, and support to keep your software running smoothly.",
            icon: "⚙️",
        },
        {
            id: 5,
            title: "Software Maintenance",
            description:
                "Continuous monitoring, updates, and support to keep your software running smoothly.",
            icon: "⚙️",
        },
        {
            id: 5,
            title: "Software Maintenance",
            description:
                "Continuous monitoring, updates, and support to keep your software running smoothly.",
            icon: "⚙️",
        },
        {
            id: 5,
            title: "Software Maintenance",
            description:
                "Continuous monitoring, updates, and support to keep your software running smoothly.",
            icon: "⚙️",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = services.length;
    const currentSlide = activeIndex + 1; // zero-based index to 1-based
    return (
        <>
            <div className='service-slider' >
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={false}
                    centeredSlides={true}
                    loop
                    slidesPerView={2}
                    spaceBetween={30}
                    speed={1000} 
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: {
                            slidesPerView: 4,
                            centeredSlides: true,
                        },
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={service.id}>
                            <div className={`service-card w-[90%] lg:w-[80%] ${index === activeIndex ? "active" : ""}`}>
                                <div className="icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>


            {/* Numeric pagination with progress bar */}
            <div className="pagination-numeric-with-bar">
                <span className="current-slide">{String(currentSlide).padStart(2, "0")}</span>
                <div className="progress-bar-wrapper" aria-label="Slide progress">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                    />
                </div>
                <span className="total-slides">{String(totalSlides).padStart(2, "0")}</span>
            </div>

        </>
    )
}
