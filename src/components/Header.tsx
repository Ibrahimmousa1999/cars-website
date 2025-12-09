import Button from "./Button";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
        <header className="bg-black py-2 fixed top-0 w-full z-50">
            <div className="main-container">
                <div className="flex items-center justify-between">
                   
                    <nav className="flex items-center gap-8">
                        <Link to="/about" className="header-link">
                            Our Services
                        </Link>
                       
                        <Link to="/about" className="header-link">
                            About Us
                        </Link>
                         <Link to="/about" className="header-link">
                            Why AMR
                        </Link>
                    </nav>
                     <img 
                        src={logo}
                        alt="App Logo" 
                        className="w-full max-w-[320px]" 
                    />
                    <div className="flex items-center gap-9">
                        <a href="#" className="group flex gap-4 items-center">
                             <svg className="group-hover:fill-primary" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M9 0H3C1.34314 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H9C10.6569 18 12 16.6569 12 15V3C12 1.34315 10.6569 0 9 0ZM2 3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3V15C10 15.5523 9.55228 16 9 16H3C2.44772 16 2 15.5523 2 15V3ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12H5Z" fill="#8C98A4"/>
                            </svg>
                            <span className="group-hover:text-primary transition-colors text-[#8C98A4] text-lg font-bold">
                                (885) 761-6327
                            </span>
                        </a>
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Header;