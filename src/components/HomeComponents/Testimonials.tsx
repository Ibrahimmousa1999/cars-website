import TestimonialsImage1 from "../../assets/images/testimonials-1.png"
import Avatar from "../../assets/images/avatar.png"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    const testimonials = [
        {
            id: 1,
            text: "“Posuere consequat sollicitudin suspendisse ac ultrices tellus. At aliquam varius varius posuere posuere amet”",
            name: "Omar Sameer",
            role: "AMR Client",
            image: Avatar
        },
          {
            id: 2,
            text: "“Posuere consequat sollicitudin suspendisse ac ultrices tellus. At aliquam varius varius posuere posuere amet”",
            name: "Omar Sameer d",
            role: "AMR Client",
            image: Avatar
        },
        // Add more testimonials as needed
    ];
    // Animation for slide change
    const animateSlideChange = (direction: 'next' | 'prev') => {
        const currentSlide = swiperRef.current?.querySelector('.swiper-slide-active');
        if (!currentSlide) return;

        const text = currentSlide.querySelector('h4');
        const author = currentSlide.querySelector('.author-info');
        const image = currentSlide.querySelector('img[alt="Testimonial"]');

        // Reset initial state
        gsap.set([text, author, image], { 
            opacity: 0,
            y: 30
        });

        // Animate in
        const tl = gsap.timeline();
        
        if (direction === 'next') {
            tl.to(image, { 
                x: 50, 
                opacity: 0, 
                duration: 0.3 
            })
            .to(image, { 
                x: -50, 
                opacity: 0, 
                duration: 0 
            })
            .to(image, { 
                x: 0, 
                opacity: 1, 
                duration: 0.5 
            });
        } else {
            tl.to(image, { 
                x: -50, 
                opacity: 0, 
                duration: 0.3 
            })
            .to(image, { 
                x: 50, 
                opacity: 0, 
                duration: 0 
            })
            .to(image, { 
                x: 0, 
                opacity: 1, 
                duration: 0.5 
            });
        }

        tl.to(text, { 
            y: 0, 
            opacity: 1, 
            duration: 0.5 
        }, "-=0.3")
        .to(author, { 
            y: 0, 
            opacity: 1, 
            duration: 0.5 
        }, "-=0.2");
    };

    // Handle navigation button clicks
    const handlePrevClick = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
        animateSlideChange('prev');
    };

    const handleNextClick = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
        animateSlideChange('next');
    };

    // Initial animation on mount
   useEffect(() => {
    if (!containerRef.current) return;
    
    // Wait for the next tick to ensure Swiper is initialized
    const timer = setTimeout(() => {
        const tl = gsap.timeline();
        
        // Animate the title
        tl.from(containerRef.current!.querySelector('h2'), {
            y: 50,
            opacity: 0,
            duration: 0.5
        });
        
        // Get the active slide after Swiper initialization
        const activeSlide = containerRef.current!.querySelector('.swiper-slide-active');
        if (!activeSlide) return;
        
        // Animate elements within the active slide
        tl.from(activeSlide.querySelector('h4'), {
            y: 30,
            opacity: 0,
            duration: 0.5
        }, "-=0.3")
        .from(activeSlide.querySelector('.author-info'), {
            y: 30,
            opacity: 0,
            duration: 0.5
        }, "-=0.2")
        .from(activeSlide.querySelector('img[alt="Testimonial"]'), {
            x: 30,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
}, [])
    return (
        <div className="mt-12 lg:mt-25 " ref={containerRef}>
            <div className="main-container">
                <h2 className="text-center dm-sans-font text-secondary text-3xl sm:text-4xl font-bold mb-2">
                    Testimonials                 
                </h2>
                
                <div className="mt-10 lg:mt-16 relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                            // Optional: Add any additional logic when slide changes
                        }}
                        autoplay={{ 
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="">
                                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-25 items-center lg:items-end">
                                    <div className="pt-6 lg:pt-24 order-2 lg:order-1 col-span-12 lg:col-span-7 flex flex-col gap-6 lg:gap-8 xl:gap-14">
                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold dm-sans-font text-secondary leading-tight">
                                            {testimonial.text}
                                        </h4>
                                        <div className="author-info flex gap-3 sm:gap-4 items-center ">
                                            <img 
                                                src={testimonial.image} 
                                                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover" 
                                                alt={testimonial.name} 
                                                width={64}
                                                height={64}
                                            />
                                            <div>
                                                <h4 className="text-lg sm:text-xl lg:text-xl font-bold dm-sans-font text-secondary">
                                                    {testimonial.name}
                                                </h4>
                                                <span className="text-sm sm:text-base text-gray-400">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 w-full h-full">
                                        <div className="relative rounded-2xl h-full">
                                            <div className="aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full h-full">
                                                <img 
                                                    src={TestimonialsImage1} 
                                                    className="w-full h-full object-cover rounded-2xl" 
                                                    alt="Testimonial" 
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-5.5 mt-8 lg:mt-0 lg:absolute lg:top-0 lg:start-0 z-10">
                        <button 
                            ref={prevButtonRef}
                            onClick={handlePrevClick}
                            className="testimonial-prev group w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14"
                            aria-label="Previous testimonial"
                        >
                            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="54" height="54" rx="27" 
                                    className="stroke-[#959EAD] group-hover:stroke-primary transition-colors duration-300" 
                                    strokeWidth="2"/>
                                <path d="M29.0312 34.9375C29.3438 34.625 29.3125 34.1562 29.0312 33.8438L25.25 30.25H34.25C34.6562 30.25 35 29.9375 35 29.5V28.5C35 28.0938 34.6562 27.75 34.25 27.75H25.25L29.0312 24.1875C29.3125 23.875 29.3438 23.4062 29.0312 23.0938L28.3438 22.4062C28.0625 22.125 27.5625 22.125 27.2812 22.4062L21.2188 28.5C20.9062 28.7812 20.9062 29.25 21.2188 29.5312L27.2812 35.625C27.5625 35.9062 28.0312 35.9062 28.3438 35.625L29.0312 34.9375Z" 
                                    className="fill-[#959EAD] group-hover:fill-primary transition-colors duration-300"
                                />
                            </svg>
                        </button>
                        <button 
                            ref={nextButtonRef}
                            onClick={handleNextClick}
                            className="testimonial-next group w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14"
                            aria-label="Next testimonial"
                        >
                            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="54" height="54" rx="27" 
                                    className="stroke-primary group-hover:stroke-primary transition-colors duration-300" 
                                    strokeWidth="2"/>
                                <path d="M26.9375 23.0938L27.625 22.4062C27.9375 22.125 28.4062 22.125 28.6875 22.4062L34.7812 28.4688C35.0625 28.7812 35.0625 29.25 34.7812 29.5312L28.6875 35.625C28.4062 35.9062 27.9375 35.9062 27.625 35.625L26.9375 34.9375C26.6562 34.625 26.6562 34.1562 26.9375 33.8438L30.7188 30.25H21.75C21.3125 30.25 21 29.9375 21 29.5V28.5C21 28.0938 21.3125 27.75 21.75 27.75H30.7188L26.9375 24.1875C26.6562 23.875 26.625 23.4062 26.9375 23.0938Z" 
                                    className="fill-primary group-hover:fill-primary"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}