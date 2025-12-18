import Button from "../Button";
import heroShapeTopLeft from "../../assets/images/hero-shape-top-left.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroShapeBottomRight from "../../assets/images/hero-shape-bottom-right.svg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs(){
      const shapeTopLeft = useRef(null);
      const shapeBottomRight = useRef(null);
      const sectionRef = useRef(null);
      const headingRef = useRef(null);
      const contentRef = useRef(null);
      const formRef = useRef(null);

      useEffect(() => {
        // Animate shapes
        gsap.fromTo(shapeTopLeft.current, 
          { x: -50, y: -50, opacity: 0 },
          { 
            x: 0, 
            y: 0, 
            opacity: 0.2, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%"
            }
          }
        );

        gsap.fromTo(shapeBottomRight.current, 
          { x: 50, y: 50, opacity: 0 },
          { 
            x: 0, 
            y: 0, 
            opacity: 0.9, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%"
            }
          }
        );

        // Animate content
        gsap.fromTo([headingRef.current, contentRef.current], 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%"
            }
          }
        );

        // Animate form
        gsap.fromTo(formRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%"
            }
          }
        );
      }, []);

    return (
        <>
            <div ref={sectionRef} className="max-w-[1360px] mx-auto mt-12 lg:mt-25">
                <div className="overflow-hidden bg-black lg:rounded-xl p-8 lg:py-20 lg:px-18 grid lg:grid-cols-12 gap-10 relative">
                    <img
                        ref={shapeTopLeft}
                        src={heroShapeTopLeft}
                        alt="Shape"
                        className="absolute top-0 start-0 z-10 opacity-20"
                    />
                    <img
                        ref={shapeBottomRight}
                        src={heroShapeBottomRight}
                        alt="Shape"
                        className="absolute bottom-0 end-0 z-10 grayscale-90"
                    />

                    <div ref={contentRef} className="relative z-20 lg:col-span-7">
                        <h2 ref={headingRef} className="text-white text-5xl font-semibold">Get in Touch with Us</h2>
                        <p className="text-lg text-gray-500 mt-10 text-normal lg:max-w-[80%] opacity-50">
                            Sagittis auctor leo vehicula augue suspendisse. Laoreet ut consectetur aenean luctus. Ac pharetra, at dolor at accumsan tellus viverra. Blandit velit, neque fermentum sed integer sed lorem. Lacus eget ultricies velit in.
                        </p>
                        <div className="border-t w-60 border-dashed border-[#B3BAC5] mt-10"></div>
                        <p className="dm-sans-font text-white mt-10 text-xl font-semibold ">
                            We love to hear from you.
                        </p>
                        <p className="dm-sans-font text-white  text-xl font-semibold ">
                            Let’s do great things together!!
                        </p>
                        <div className="grid gap-6 sm:gap-0 sm:grid-cols-2 mt-10">
                            <div>
                                <h3 className="opacity-80 text-gray-500 font-semibold text-base mb-3">
                                    Contact Us
                                </h3>
                                <p className="flex items-center gap-2 text-white text-base font-semibold">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM4.09132 6.58194C4.24961 6.23843 4.59696 6 5 6H19C19.403 6 19.7504 6.23843 19.9087 6.58194L12.6139 12.2556C12.2528 12.5365 11.7472 12.5365 11.3861 12.2556L4.09132 6.58194ZM4 9.04464V14.865L7.61261 11.8544L4 9.04464ZM4.0829 17.3993C4.23705 17.7529 4.58966 18 5 18H19C19.4103 18 19.763 17.7529 19.9171 17.3993L14.7715 13.1113L13.8418 13.8343C12.7585 14.6769 11.2415 14.6769 10.1582 13.8343L9.22853 13.1113L4.0829 17.3993ZM20 14.865V9.04464L16.3874 11.8544L20 14.865Z" fill="white"/>
                                    </svg> 
                                    <span>
                                        hello.carrotlabs@gmail.com</span>
                                </p>
                                <p className="mt-2 flex items-center gap-2 text-white text-base font-semibold">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15 3H9C7.34314 3 6 4.34315 6 6V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V6C18 4.34315 16.6569 3 15 3ZM8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18V6ZM11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z" fill="white"/>
                                    </svg>

                                    <span>
                                        (885) 761-6327</span>
                                </p>
                            </div>
                            <div>
                                <h3 className="opacity-80 text-gray-500 font-semibold text-base mb-3">
                                    Location
                                </h3>
                                <p className="flex  gap-2 text-white text-base font-semibold">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5487 12.1637L12.0455 18.7203L7.50811 12.1855C6.76428 10.7087 6.68438 8.94769 7.29099 7.40024C9.04849 2.91683 14.9513 2.90133 16.7347 7.38581C17.3475 8.92687 17.2791 10.6851 16.5487 12.1637ZM18.1983 13.1099L13.1142 20.8423L13.1135 20.8438L13.0642 20.9436L12.5873 21.6568C12.3503 22.1366 11.713 22.1391 11.4723 21.6613L11.0438 20.9518L10.9937 20.8523L10.993 20.8509L5.86579 13.1451C4.85099 11.1302 4.74198 8.7277 5.56957 6.61652C7.96992 0.493191 16.0219 0.482173 18.4522 6.59367C19.2878 8.69494 19.1949 11.0925 18.1983 13.1099ZM12.9778 9.38272C12.9791 9.9386 12.5619 10.3903 12.0459 10.3915C11.5299 10.3928 11.1105 9.94318 11.1092 9.3873C11.1078 8.83142 11.525 8.37976 12.041 8.3785C12.557 8.37723 12.9764 8.82684 12.9778 9.38272ZM14.8463 9.37814C14.8504 11.0458 13.5988 12.4008 12.0509 12.4045C10.5029 12.4083 9.24469 11.0595 9.2406 9.39187C9.23652 7.72423 10.4881 6.36926 12.0361 6.36547C13.5841 6.36168 14.8423 7.7105 14.8463 9.37814Z" fill="white"/>
                                    </svg>

                                    <span>
                                        Saudi Arebia,  Damam

                                        <span className="block font-normal! mt-1">
                                            2400 6th St NW,<br/>
                                            Damam, RT 20059
                                        </span></span>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={formRef} className="relative z-20 lg:col-span-5 bg-white rounded-lg py-8 px-5 md:p-8">
                        <h2 className="text-3xl text-secondary font-semibold ">
                            Contact us
                        </h2>
                        <form>
                            <div className="grid gap-6 mt-8">
                                <div>
                                    <label htmlFor="first_name" className="input-label">First Name</label>
                                    <input type="text" id="first_name" placeholder="Your Name"
                                    className="input-style" />
                                </div>
                                <div>
                                    <label htmlFor="phone_number" className="input-label">Phone Number</label>
                                    <input type="text" id="phone_number" placeholder="000 000 0000"
                                    className="input-style" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="input-label">Message</label>
                                    <textarea  id="message" placeholder="000 000 0000" rows={3}
                                    className="input-style" />
                                </div>
                                <Button classes="py-4">
                                    Book a Schedule
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}