import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

interface ChooseUsGridProps {
    mainImage: string;
    shapeImage: string;
    title: string;
    description: string;
    rowReverse?: boolean;
    classesShape?: string;
    children?: React.ReactNode;
    showList?: boolean
}

export default function ChooseUsGrid({ 
    mainImage, 
    shapeImage, 
    title, 
    description, 
    rowReverse = false, 
    classesShape = '', 
    showList = true,
    children 
}: ChooseUsGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const shapeRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        // Animate shape
        tl.fromTo(
            shapeRef.current,
            { opacity: 0, scale: 0.5, rotation: -15 },
            { 
                opacity: 1, 
                scale: 1, 
                rotation: 0, 
                duration: 0.8,
                ease: "back.out(1.4)"
            }
        );

        // Animate content - slide from left or right based on rowReverse
        tl.fromTo(
            contentRef.current,
            { 
                opacity: 0, 
                x: rowReverse ? 50 : -50 
            },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.6,
                ease: "power2.out" 
            },
            "-=0.4"
        );

        // Animate image - slide from the opposite direction
        tl.fromTo(
            imageRef.current,
            { 
                opacity: 0, 
                x: rowReverse ? -50 : 50 
            },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.8,
                ease: "power2.out" 
            },
            "-=0.3"
        );

        return () => {
            tl.kill();
        };
    }, [rowReverse]);

    return (
        <div ref={containerRef} className="overflow-hidden">
            <div className="relative">
                <img
                    ref={shapeRef}
                    src={shapeImage}
                    alt="Shape"
                    className={`max-w-[80%] absolute end-0 -z-10 ${classesShape ? classesShape : 'bottom-20'}`}
                />
                <div className="main-container grid lg:grid-cols-2 gap-7 mt-5.5">
                    <div ref={contentRef} className={`lg:pt-8 ${rowReverse ? 'lg:order-2' : ''}`}>
                        <div className="w-24 h-24 rounded-2xl bg-[#FFC729] drop-shadow-xl flex justify-center items-center mb-5 lg:mb-10">
                            {children}
                        </div>
                        <h3 className="text-secondary text-[22px] font-bold">
                            {title}
                        </h3>
                        <p className="text-lg mt-3 dm-sans-font text-gray-400 max-w-[530px]">
                            {description}
                        </p>
                        {
                            showList ?? <div className="grid gap-x-2  gap-y-4 lg:gap-y-8 lg:grid-cols-2 mt-4">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded border-3 border-[#0F427F] bg-primary"></span>
                                    <h4 className="font-bold lg:text-lg dm-sans-font">
                                        Ut massa accumsan
                                    </h4>
                                </div>
                            ))}
                        </div>
                        }
                        
                        <div className="flex gap-6 mt-5 lg:mt-10">
                            <div>
                                <Button classes="px-6">
                                    Request services
                                </Button>
                            </div>
                            <div>
                                <Button 
                                    classes="px-6 bg-gray-500! hover:bg-gray-500/50!"
                                >
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${rowReverse ? 'lg:order-1' : ''}`}>
                        <img 
                            ref={imageRef}
                            src={mainImage} 
                            className="rounded-2xl w-full max-h-[580px] object-cover" 
                            alt="Service" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}