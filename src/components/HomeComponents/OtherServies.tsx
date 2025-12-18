import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function OtherServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const serviceItemsRef = useRef<Array<HTMLDivElement | null>>(Array(6).fill(null));

    useEffect(() => {
        if (!containerRef.current) return;

        // Create an array to store the animations
        const animations: gsap.core.Tween[] = [];

        // Animation for each service item
        serviceItemsRef.current.forEach((item, index) => {
    if (!item) return;
    
    // Set initial state
    gsap.set(item, { 
        y: 30,
        opacity: 0 
    });

    const animation = gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        }
    });
    
    animations.push(animation);
});

        // Cleanup
        return () => {
            animations.forEach(anim => anim.kill());
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    const services =[
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        },
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        },
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        },
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        },
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        },
        {
            title: "Gravida sed tincidunt",
            description: "Nec mauris, ornare id tristique adipiscing volutpat, fermentum consectetur."
        }
    ]

    return (
        <div className="mt-12 lg:mt-25" ref={containerRef}>
            <div className="main-container">
                <h2 className="mb-4 lg:mb-8 dm-sans-font text-secondary text-4xl font-bold">
                    Other Services                 
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            ref={el => {
                                if (el) serviceItemsRef.current[index] = el;
                            }}
                            className="dm-sans-font "
                        >
                            <h4 className="text-secondary font-bold text-lg">
                                {service.title}
                            </h4>
                            <p className="text-sm mt-2 text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}