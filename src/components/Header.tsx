import Button from "./Button";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 py-2 shadow-lg' : 'bg-black py-4'}`}>
      <div className="main-container">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="header-link">
              Our Services
            </Link>
            <Link to="/about-us" className="header-link">
              About Us
            </Link>
            <Link to="/why-amr" className="header-link">
              Why AMR
            </Link>
          </nav>
           <Link to="/" className="shrink-0">
              <img 
                src={logo}
                alt="App Logo" 
                className="h-10 lg:h-12 w-auto" 
              />
            </Link>
          {/* Contact and Button - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:8857616327" className="group flex items-center space-x-2">
              <svg className="group-hover:fill-primary transition-colors" width="12" height="18" viewBox="0 0 12 18" fill="#8C98A4" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0H3C1.34314 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H9C10.6569 18 12 16.6569 12 15V3C12 1.34315 10.6569 0 9 0ZM2 3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3V15C10 15.5523 9.55228 16 9 16H3C2.44772 16 2 15.5523 2 15V3ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12H5Z"/>
              </svg>
              <span className="text-white hover:text-primary transition-colors text-base font-medium">
                (885) 761-6327
              </span>
            </a>
            <Button to="/contact-us">Contact Us</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'} 
          overflow-hidden transition-all duration-300 ease-in-out bg-black/95`}
        >
          <nav className="flex flex-col space-y-4 px-4">
            <Link 
              to="/services" 
              className="text-white hover:text-primary text-lg py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-primary text-lg py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/why-amr" 
              className="text-white hover:text-primary text-lg py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Why AMR
            </Link>
            <div className="pt-2">
              <a 
                href="tel:8857616327" 
                className="flex items-center space-x-2 text-white hover:text-primary py-2"
              >
                <svg width="12" height="18" viewBox="0 0 12 18" fill="#8C98A4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0H3C1.34314 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H9C10.6569 18 12 16.6569 12 15V3C12 1.34315 10.6569 0 9 0ZM2 3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3V15C10 15.5523 9.55228 16 9 16H3C2.44772 16 2 15.5523 2 15V3ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12H5Z"/>
                </svg>
                <span>(885) 761-6327</span>
              </a>
              <div className="mt-4">
                <Button fullWidth>Contact Us</Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;