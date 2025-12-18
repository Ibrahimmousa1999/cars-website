import heroImage from "../../assets/images/hero-image.png";
import heroShapeTopLeft from "../../assets/images/hero-shape-top-left.svg";
import heroShapeBottomRight from "../../assets/images/hero-shape-bottom-right.svg";
import Button from "../Button";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
interface HeroProps {
  header: string,
  description: string,
  isCenter?: boolean
}
function Hero({header, description, isCenter}: HeroProps) {
  const shapeTopLeft = useRef(null);
  const shapeBottomRight = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const heroImageRef = useRef(null)
  const [tiles, setTiles] = useState([]);

  // useEffect(() => {
  //   // Create tiles based on screen size
  //   const screenWidth = window.innerWidth;
  //   const screenHeight = window.innerHeight;

  //   const rows = 6;
  //   const cols = 8;

  //   const tileWidth = screenWidth / cols;
  //   const tileHeight = screenHeight / rows;

  //   const tempTiles = [];
  //   for (let row = 0; row < rows; row++) {
  //     for (let col = 0; col < cols; col++) {
  //       tempTiles.push({
  //         x: col * tileWidth,
  //         y: row * tileHeight,
  //         bgX: -(col * tileWidth),
  //         bgY: -(row * tileHeight),
  //         width: tileWidth,
  //         height: tileHeight,
  //       });
  //     }
  //   }

  //   setTiles(tempTiles);
  // }, []);

useEffect(() => {
//   if (tiles.length === 0) return;

//   // تأكد من تحميل الصورة أولًا
//   const img = new Image();
//   img.src = heroImage;
//   img.onload = () => {
    const tl = gsap.timeline();

//     // 1️⃣ Animate tiles أولًا
//     tl.fromTo(
//       ".tile",
//       { opacity: 0, y: 50, scale: 0.5 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         ease: "power3.out",
//         stagger: 0.05,
//       }
//     );

    // 2️⃣ بعد انتهاء tiles، تظهر الأشكال
    tl.fromTo(
      shapeTopLeft.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      shapeBottomRight.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "<"
    );

    // 3️⃣ Split title and description letters
    const splitText = (element) => {
      if (!element) return;
      if (!element.querySelector("span")) {
        const text = element.textContent.trim();
        element.textContent = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = 0;
          element.appendChild(span);
        });
      }
    };

    splitText(titleRef.current);
    splitText(descriptionRef.current);

    // 4️⃣ Animate title letters
    tl.to(titleRef.current.children, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.02,
      ease: "power1.out",
    });

    // 5️⃣ Animate description letters
    tl.to(descriptionRef.current.children, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.01,
      ease: "power1.out",
    });

    // 6️⃣ Animate button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // 7️⃣ Animate hero image with a slight delay after button
    tl.fromTo(
      heroImageRef.current,
      { opacity: 0, scale: 1.05 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.3 // Slight delay after button appears
      },
      "-0.5" // Overlap slightly with previous animation
    );
  // };
}, []);

  return (
    <section className="h-screen pt-[90px] relative overflow-hidden">
      <img
        ref={shapeTopLeft}
        src={heroShapeTopLeft}
        alt="Shape"
        className="absolute top-[72px] lg:top-[85px] start-0 z-30"
      />
      <img
        ref={shapeBottomRight}
        src={heroShapeBottomRight}
        alt="Shape"
        className="absolute bottom-0 end-0 z-30"
      />

      {/* Hero Layer */}
      <div className="hero-layer absolute w-full h-full inset-0 z-20"></div>

      <img ref={heroImageRef} src={heroImage} alt="Hero Image" className="object-cover absolute w-full h-full inset-0"/>

      {/* Content */}
      <div className={`main-container absolute inset-0 z-40 flex items-center pt-[90px] ${isCenter ? 'justify-center text-center':''}`}>
        <div>
          <h1
            ref={titleRef}
            className={`text-white text-4xl md:text-5xl lg:text-[56px] leading-[130%] font-bold  ${isCenter ? 'max-w-[820px]':'max-w-2xl'}`}
          >
            {header}
            
          </h1>
          <p
            ref={descriptionRef}
            className={`text-white text-lg leading-relaxed  mt-3 ${isCenter ? 'mx-auto max-w-[820px]':'max-w-lg'}`}
          >
            {description}
            
          </p>
          <Button to="/contact-us" ref={buttonRef} classes="px-16 mt-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
