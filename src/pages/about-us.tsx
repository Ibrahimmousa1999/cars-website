import ContactUs from "../components/HomeComponents/ContactUs";
import Hero from "../components/HomeComponents/Hero";
import Button from "../components/Button";
import aboutUs1 from "../assets/images/car-program.png";
import aboutUs2 from "../assets/images/car-suspens.png";
import imageChooseUs2 from "../assets/images/image-choose-us-2.png";
import aboutUsImage from "../assets/images/about-us-base.png"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function AboutUs() {
    usePageMetadata(
        "About Us",
        "Learn more about our company, our mission, and the team behind our exceptional car services."
    );
    
    const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the first section
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current.querySelectorAll('h3, p, button, img'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animation for the second section
    if (section2Ref.current) {
      const elements = section2Ref.current.querySelectorAll('h3, p, button, img');
      
      // Reset initial state
      gsap.set(elements, { opacity: 0, y: 30 });
      
      // Create a timeline for the second section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false // Set to true to see the trigger points
        }
      });
      
      // Animate each element with a slight delay
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
      <Hero
        image={aboutUsImage}
        isCenter={true}
        header="Odio tellus aliquet at tellus. Fames nulla nulla consequs"
        description="Odio tellus aliquet at tellus. Fames nulla nulla consequat amet, facilisis. Ultrices pulvinar auctor id elementum nisi tincidunt tristique vestibulum. At lectus non, gravida."
      />
       <div className="flex flex-col gap-6 lg:gap-16 mt-6 lg:mt-16">
            <div ref={section1Ref} className="main-container grid lg:grid-cols-2 gap-7 mt-5.5">
              <div className="lg:py-10">
                  <h3 className="text-secondary text-3xl font-bold">
                      Leo nibh morbi id faucibus eget sollicitudin lectus. Nunc nisi.
                  </h3>
                  <p className="text-lg mt-3 dm-sans-font text-gray-400 max-w-[530px]">
                      Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum id augue in volutpat aliquam. Id pulvinar tristique nascetur vel pharetra,
                  </p>
                  <Button classes="px-6 mt-5 lg:mt-5">
                      Request services
                  </Button>
                </div>
                <div>
                  <img 
                      src={imageChooseUs2} 
                      className="rounded-2xl w-full max-h-[400px] object-cover" 
                      alt="Service" 
                  />
                </div>
            </div>
             <div ref={section2Ref} className="main-container grid lg:grid-cols-2 gap-7 mt-5.5">
              
                <div className="order-2 lg:-order-1 grid grid-cols-2 gap-6 lg:gap-8 items-end">
                  <img 
                      src={aboutUs2} 
                      className="rounded-2xl h-full w-full max-h-[400px]" 
                      alt="Service" 
                  />
                   <img 
                      src={aboutUs1} 
                      className="rounded-2xl h-full w-full max-h-[280px]" 
                      alt="Service" 
                  />
                </div>
                <div className="lg:py-10">
                  <h3 className="text-secondary text-3xl font-bold">
                      Leo nibh morbi id faucibus eget sollicitudin lectus. Nunc nisi.
                  </h3>
                  <p className="text-lg mt-3 dm-sans-font text-gray-400 max-w-[530px]">
                      Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum id augue in volutpat aliquam. Id pulvinar tristique nascetur vel pharetra,
                  </p>
                  <Button classes="px-6 mt-5 lg:mt-5">
                      Request services
                  </Button>
                </div>
            </div>
        </div>
      <ContactUs/>
    </main>
  );
}
