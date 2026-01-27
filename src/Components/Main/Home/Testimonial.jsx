import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TESTIMONIAL_DATA = [
    { 
        id: 1, 
        name: "Romeena De Silva", 
        role: "Janet Cosmetics", 
        text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.", 
        img: "https://i.pravatar.cc/150?u=1" 
    },
    { 
        id: 2, 
        name: "Arjun Mehta", 
        role: "Tech Solutions Inc.", 
        text: "One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.", 
        img: "https://i.pravatar.cc/150?u=2" 
    },
    { 
        id: 3, 
        name: "Imran Khan", 
        role: "Software Engineer", 
        text: "Their technical expertise in React and Swiper implementation is top-notch. Highly recommended for complex web projects.", 
        img: "https://i.pravatar.cc/150?u=3" 
    },
    { 
        id: 4, 
        name: "Sarah Jenkins", 
        role: "Creative Director", 
        text: "Professional, timely, and creative. They transformed our digital presence completely.", 
        img: "https://i.pravatar.cc/150?u=4" 
    },
    { 
        id: 5, 
        name: "Michael Chen", 
        role: "E-commerce Manager", 
        text: "A fantastic team to work with. They really understand the client's vision and deliver beyond expectations.", 
        img: "https://i.pravatar.cc/150?u=5" 
    },
    { 
        id: 6, 
        name: "Aisha Roberts", 
        role: "Marketing Lead", 
        text: "The UI/UX design they provided was sleek and user-friendly. Our conversion rates have improved by 30%.", 
        img: "https://i.pravatar.cc/150?u=6" 
    },
    { 
        id: 7, 
        name: "David Smith", 
        role: "Startup Founder", 
        text: "Scaling our platform was a breeze with their help. They are experts in high-performance web applications.", 
        img: "https://i.pravatar.cc/150?u=7" 
    },
    { 
        id: 8, 
        name: "Elena Rodriguez", 
        role: "Product Owner", 
        text: "Clear communication and great project management. They handled our complex requirements with ease.", 
        img: "https://i.pravatar.cc/150?u=8" 
    },
    { 
        id: 9, 
        name: "Kevin Park", 
        role: "Mobile Architect", 
        text: "Their attention to detail is remarkable. From pixel-perfect designs to clean code, they cover it all.", 
        img: "https://i.pravatar.cc/150?u=9" 
    },
    { 
        id: 10, 
        name: "Sophia Williams", 
        role: "Brand Strategist", 
        text: "Working with them felt like having an in-house team. They are dedicated, talented, and highly reliable.", 
        img: "https://i.pravatar.cc/150?u=10" 
    },
];

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className="w-full py-16  overflow-hidden">
            {/* 1. Quote Section */}
            <div className="max-w-2xl mx-auto px-6 mb-12 text-center relative">
                <span className="absolute -top-10 left-0 text-7xl text-purple-600 opacity-20 font-serif">“</span>
                <p className="text-gray-600 text-lg md:text-xl min-h-37.5 md:min-h-auto leading-relaxed italic transition-all duration-500 ease-in-out">
                    {TESTIMONIAL_DATA[activeIndex].text}
                </p>
                <span className="absolute -bottom-10 right-0 text-7xl text-purple-600 opacity-20 font-serif">”</span>
            </div>

            {/* 2. Slider Section */}
            <div className="max-w-6xl mx-auto px-4 relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={{
                        nextEl: '.nav-next',
                        prevEl: '.nav-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="py-10!"
                >
                    {TESTIMONIAL_DATA.map((item, index) => (
                        <SwiperSlide key={item.id} className="flex flex-col items-center justify-center cursor-pointer">
                            {({ isActive }) => (
                                <div className={`transition-all duration-500 flex flex-col items-center ${isActive ? 'scale-125 opacity-100 grayscale-0' : 'scale-75 opacity-40 grayscale'
                                    }`}>
                                    <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Active Info */}
                                    <div className={`mt-4 text-center transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <h4 className="text-purple-900 font-bold text-sm whitespace-nowrap">{item.name}</h4>
                                        <p className="text-gray-400 text-xs whitespace-nowrap">{item.role}</p>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="nav-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-800 rounded-full flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="nav-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 border-2 border-purple-800 rounded-full flex items-center justify-center text-purple-800 hover:bg-purple-800 hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}