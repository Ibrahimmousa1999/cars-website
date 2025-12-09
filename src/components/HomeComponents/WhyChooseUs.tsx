import whyChooseUsShapeLeft from "../../assets/images/why-choose-us-shape-left.svg";
import whyChooseUsShapeRightBottom from "../../assets/images/why-choose-us-shape-right-bottom.svg";
import whyChooseUsShapeRightTop from "../../assets/images/why-choose-us-shape-right-top.svg";
import imageChooseUs3 from "../../assets/images/image-choose-us-3.png";
import imageChooseUs2 from "../../assets/images/image-choose-us-2.png";
import imageChooseUs1 from "../../assets/images/image-choose-us-1.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import heroImage from "../../assets/images/hero-image.png";
import Button from "../Button";

export default function WhyChooseUs() {
    const shapeTopLeft = useRef<HTMLImageElement>(null);
    const shapeRightTop = useRef<HTMLImageElement>(null);
    const shapeRightBottom = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);
    const image1Ref = useRef<HTMLImageElement>(null);
const image2Ref = useRef<HTMLImageElement>(null);
const image3Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        
        // Initialize refs arrays
        buttonRefs.current = [];

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        // Animate shapes with different directions
        tl.fromTo(
            shapeTopLeft.current,
            { opacity: 0, x: -100, y: -50, rotate: -15 },
            { 
                opacity: 1, 
                x: 0, 
                y: 0, 
                rotate: 0, 
                duration: 1, 
                ease: "power2.out" 
            },
            "<"
        );

        tl.fromTo(
            shapeRightTop.current,
            { opacity: 0, x: 100, y: -50, rotate: 15 },
            { 
                opacity: 1, 
                x: 0, 
                y: 0, 
                rotate: 0, 
                duration: 1, 
                ease: "power2.out" 
            },
            "<.2"
        );

        tl.fromTo(
            shapeRightBottom.current,
            { opacity: 0, y: 100, scale: 0.8 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 1, 
                ease: "back.out(1.5)" 
            },
            "<.2"
        );

        // Animate heading and description
        tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 40 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            },
            "-=.7"
        );

        tl.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            },
            "-=.6"
        );

        // Animate content text
        tl.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            },
            "-=.5"
        );

        // Animate buttons with stagger
        if (buttonRefs.current.length > 0) {
            tl.fromTo(
                buttonRefs.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                },
                "-=.4"
            );
        }

         // Animate first image
  if (image1Ref.current) {
    tl.fromTo(
      image1Ref.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }
    );
  }

  // Animate second image
  if (image2Ref.current) {
    tl.fromTo(
      image2Ref.current,
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.3" // slight overlap with previous animation
    );
  }

  // Animate third image
  if (image3Ref.current) {
    tl.fromTo(
      image3Ref.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      },
      "-=0.4" // slight overlap with previous animation
    );
  }
       
    }, []);

    return (
        <div ref={sectionRef} className="py-18 relative overflow-hidden">
            <img
                ref={shapeTopLeft}
                src={whyChooseUsShapeLeft}
                alt="Shape"
                className="absolute -top-8 -start-50 -z-10"
            />
            <img
                ref={shapeRightTop}
                src={whyChooseUsShapeRightTop}
                alt="Shape"
                className="absolute top-25 end-0 -z-10"
            />
            <div className="main-container relative z-10">
                <div className="mb-12" ref={el => {
                    if (!el) return;
                    const h2 = el.querySelector('h2');
                    if (h2) headingRef.current = h2;
                }}>
                    <h2 className="dm-sans-font text-secondary text-4xl font-bold">
                        Why to Choose AMR
                    </h2>
                    <p ref={descriptionRef} className="text-base mt-8 text-gray-400 max-w-[730px]">
                        We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
                    </p>
                </div>
                <div className="grid grid-cols-5 gap-6">
                    <div ref={contentRef} className="col-span-2 py-6">
                        <h3 className=" text-secondary text-[22px] font-bold">
                            Leo nibh morbi id faucibus eget sollicitudin lectus. Nunc nisi, euismod cursus in Vitae nec donec a mi lectus gravida.
                        </h3>
                        <p className="text-base mt-3 text-gray-400">
                            Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum id augue in volutpat aliquam. Id pulvinar tristique nascetur vel pharetra,
                        </p>
                        <div className="flex gap-6 mt-6">
                            <div>
                                <Button 
                                    ref={el => el && (buttonRefs.current[0] = el)}
                                    classes="px-6"
                                >
                                    Request services
                                </Button>
                            </div>
                            <div>
                                <Button 
                                    ref={el => el && (buttonRefs.current[1] = el)}
                                    classes="px-6 bg-gray-500! hover:bg-gray-500/50!"
                                >
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-5 grid-rows-2 gap-x-7 gap-y-5">
                            <div className="col-span-2">
                                <img
                                    ref={image1Ref}
                                    src={imageChooseUs1}
                                    alt="Service showcase 1"
                                    className="h-[190px] w-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="col-span-3 row-span-2">
                                <img
                                    ref={image2Ref}
                                    src={imageChooseUs2}
                                    alt="Main service showcase"
                                    className="h-[400px] w-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="col-span-2">
                                <img
                                    ref={image3Ref}
                                    src={imageChooseUs3}
                                    alt="Service showcase 2"
                                    className="h-[190px] w-full object-cover rounded-2xl "
                                />
                            </div>
                        </div>
                        <img
                            ref={shapeRightBottom}
                            src={whyChooseUsShapeRightBottom}
                            alt="Shape"
                            className="absolute -bottom-14 -end-16 -z-10"
                        />
                    </div>
                    
                </div>
               </div>
            </div>
        );
}