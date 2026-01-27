import React, { useState } from 'react'
import bannerimg from "../../../assets/bannerimg.png"
import Services from './Services'
import leadingcom from "../../../assets/leadingcom.webp"
import Testimonial from "../../Main/Home/Testimonial"
import Case_Study from './Case_Study'
import left_element from '../../../assets/testleft.png'
import right_element from '../../../assets/testright.png'
import Building_Software from './Building_Software'
import Features from './Features'
import Tech_Stack_Tab from "./Tech_Stack_Tab"
import howworks from "../../../assets/webstroke.png"
import btnimg from "../../../assets/btnelement.png"
import { Link, NavLink } from 'react-router-dom'



export default function Home() {




  return (
    <>
      <section id='banner-sec' className='section-pad' >
        <div className="banner-sec-wrapper">
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className='md:col-span-5 col-span-12 ' >
                <div className="banner-text-wrap h-full  flex items-center ">
                  <div>
                    <p className='banner-head' >Great <span className='txt-color' >Product</span> is </p>
                    <h2 className='banner-subhead' >Built by great <span className='txt-color' >teams</span></h2>
                    <p className='banner-disc' >We help build and manage a team of world-class developers to bring your vision to life</p>
                    <div className="banner-btn">
                      <NavLink
                        to="/contactus"
                        className=" inline-block section-btn px-4 py-2 rounded text-center"
                      >
                        Contact Us
                      </NavLink>

                    </div>

                  </div>


                </div>
              </div>
              <div className='md:col-span-6  md:col-start-7 col-span-12  p-4' >
                <div className="banner-img-wrap">
                  <img src={bannerimg} className='w-full h-auto' alt="" />

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      <section id="service-sec" className="section-pad light-purple-bg">
        <div className="service-sec-wrapper">
          <div className="section-title-parent text-center ">
            <h3 className="section-title">Services we offer</h3>
          </div>

          <div className="swiper-pagination-wrapper" style={{ position: "relative" }}>
            <Services />
          </div>
        </div>
      </section>
      <section id='leading-comp' className='section-pad' >
        <div className="container mx-auto  lg:px-30 leading-com-wrapper">
          <div className="grid grid-cols-12">
            <div className=" md:col-span-5 col-span-12 ">
              <div className="leading-comp-text-parent text-left h-full flex items-center " >
                <div>
                  <div className="common-head-parent">
                    <h4 className='common-section-head' >
                      Leading companies trust us
                    </h4>
                    <h3 className="common-section-subhead">Services we offer</h3>

                  </div>
                  <p className='leading-comp-disc ' >We <span className='txt-color' >add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
                  <div>
                    <a
                      href="#"
                      className="inline-block section-btn px-4 md:mt-4 mt-2 py-2 rounded text-center"
                    >
                      See more Informations
                    </a>
                  </div>


                </div>

              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 col-span-12">
              <div className="leading-comp-img-parent  mt-sm-0 mt-10">
                <img className='mx-auto sm:w-full rounded-2xl' src={leadingcom} alt="" />


              </div>
            </div>
          </div>

        </div>

      </section>
      <section id='customer-review' className='section-pad light-purple-bg' >
        <div className="customer-review-wrapper text-center container mx-auto">
          <div className='flex justify-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                Leading companies trust us
              </h4>
              <h3 className="common-section-subhead">Services we offer</h3>

            </div>
          </div>
          <div className="Testimonial wrapper">
            <Testimonial />

          </div>



        </div>

      </section>
      <section id='case-study' className='section-pad' >
        <div className="case-study-wrapper conatiner mx-auto ">
          <div className='flex justify-center text-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                Our recent
              </h4>
              <h3 className="common-section-subhead"> Case studies</h3>

            </div>
          </div>
          <Case_Study />
          <div className="left-case-study-element">
            <img src={left_element} alt="" />
          </div>
          <div className="right-case-study-element">
            <img src={right_element} alt="" />
          </div>

        </div>


      </section>
      <section id='wayto-build' className='light-purple-bg section-pad' >
        <div className="wayto-build-wrapper container mx-auto lg:px-50">
          <div className='flex justify-center text-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                Way of building
              </h4>
              <h3 className="common-section-subhead">Great Software</h3>

            </div>
          </div>
          <div className="wayto-build-content">
            <Building_Software />

          </div>



        </div>

      </section>
      <section id='our-design' className=' section-pad' >
        <div className="our-design-wrapper container mx-auto lg:px-50">
          <div className='flex justify-center text-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                Our design and
              </h4>
              <h3 className="common-section-subhead">development approach</h3>

            </div>
          </div>
          <Features />



        </div>

      </section>
      <section id='tech-stack' className='section-pad light-purple-bg' >
        <div className="tech-stack-wrapper">
          <div className='flex justify-center text-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                Our
              </h4>
              <h3 className="common-section-subhead">Tech Stack</h3>

            </div>
          </div>
          <Tech_Stack_Tab />

        </div>

      </section>
      <section id='how-works' className='section-pad ' >
        <div className="how-works-wrapper container mx-auto">
          <div className='flex justify-center text-center ' >
            <div className="common-head-parent ">
              <h4 className='common-section-head' >
                How development
              </h4>
              <h3 className="common-section-subhead">through Alcaline works</h3>

            </div>
          </div>

          <div className="how-works-content-parent mt-15 ">
            <div className="how-works-top-part grid gap-5 md:grid-cols-3 grid-cols-1">
              <div className="how-works-card ">
                <div className="md:max-w-75 how-works-maincard border border-[#B13A7E] mx-auto p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>
              <div className="how-works-card ">
                <div className="md:max-w-75 how-works-maincard  border border-[#B13A7E] mx-auto p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle flex-1 text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>
              <div className="how-works-card ">
                <div className="md:max-w-75 how-works-maincard  border border-[#B13A7E] mx-auto p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle  text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
                    choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>

            </div>
            <div className="how-works-midimg-parent hidden md:block ">
              <img src={howworks} className='w-full' alt="" />

            </div>
            <div className="how-works-bottom-part grid  gap-5 md:grid-cols-3 grid-cols-1">
              <div className="how-works-card flex justify-end ">
                <div className="md:max-w-75 how-works-maincard  border border-[#B13A7E]  p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle flex-1  text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>
              <div className="how-works-card flex justify-end ">
                <div className="md:max-w-75 how-works-maincard  border border-[#B13A7E]  p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle flex-1 text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>
              <div className="how-works-card flex justify-end ">
                <div className="md:max-w-75 how-works-maincard how-works-lastcard  border border-[#B13A7E]  p-5 bg-white rounded-xl shadow-md 
           hover:shadow-xl transition-all duration-300"  >
                  <h3 className='how-works-title mb-2' ><span className='txt-color' >#1</span>Assemble the right team</h3>
                  <p className='how-works-subtitle    text-gray-500 text-[14px]' >
                    We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.

                  </p>

                </div>


              </div>

            </div>

          </div>


        </div>

      </section>
      <section id='ctasec' className='light-purple-bg section-pad' >
        <div className="ctasec-wrapper flex lg:justify-between items-center gap-5 text-center flex-col md:flex-row justify-center rounded-[20px] bg-[#ECEFF6] md:p-20 px-2 py-15 md:max-w-[75%] max-w-full mx-auto ">
          <h4 className='ctasec-heading' >
            Hire the best developers and
            <br className="hidden lg:block" />
            designers around!
          </h4>
          <div className="cta-button-parent w-fit md:mt-0 mt-8 ">
            <div className="topbtn-element">
              <img src={btnimg} alt="" />
            </div>
            <a
              href="#"
              className=" inline-block section-btn px-4 py-2 rounded text-center"
            >
              Hire Top Developers
            </a>
            <div className="bottombtn-element">
              <img src={btnimg} alt="" />
            </div>
          </div>




        </div>

      </section>

    </>
  )
}
