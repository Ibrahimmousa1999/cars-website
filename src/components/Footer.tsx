import { Link } from "react-router-dom";
import logo from "../assets/images/black-logo.svg";

export default function Footer() {
    return (
        <footer className="mt-12 lg:mt-20 border-t border-[#e7e5ea]">
            <div className="main-container">
                <div className="py-10 border-b border-[#e7e5ea]">
                    <div className="flex items-center justify-between flex-col gap-6 lg:gap-0 lg:flex-row">
                        <nav className="flex items-center gap-8">
                            <Link to="/services" className="header-link text-black! hover:text-gray-400!">
                                Our Services
                            </Link>
                        
                            <Link to="/about-us" className="header-link text-black! hover:text-gray-400!">
                                About Us
                            </Link>
                            <Link to="/book-appointment" className="header-link text-black! hover:text-gray-400!">
                                Book appointment
                        </Link>
                       
                        </nav>
                            <img 
                                src={logo}
                                alt="App Logo" 
                                className="lg:me-8 brightness-0 w-full max-w-[160px]" 
                            />
                            <div className="flex gap-10 items-center">
                                <Link to="/about" className="header-link text-black! hover:text-gray-400!">
                                    Contact Us
                                </Link> 
                                <div className="flex gap-10 items-center">
                                    <a className="transition hover:-translate-y-0.5" href="#">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.1741C23.1075 4.55783 22.1565 4.81219 21.165 4.93569C22.185 4.33877 22.9635 3.40074 23.3295 2.27012C22.3785 2.82587 21.3285 3.21843 20.2095 3.4375C19.3065 2.49507 18.0195 1.91138 16.6155 1.91138C13.8915 1.91138 11.6985 4.07853 11.6985 6.73528C11.6985 7.11755 11.7315 7.48511 11.8125 7.83503C7.722 7.63949 4.1025 5.71786 1.671 2.79059C1.2465 3.51248 0.9975 4.33877 0.9975 5.22827C0.9975 6.89848 1.875 8.37902 3.183 9.23618C2.3925 9.22148 1.617 8.99653 0.96 8.6422C0.96 8.6569 0.96 8.67601 0.96 8.69513C0.96 11.0387 2.6655 12.9853 4.902 13.4338C4.5015 13.5411 4.065 13.5925 3.612 13.5925C3.297 13.5925 2.979 13.5749 2.6805 13.5102C3.318 15.4201 5.127 16.8242 7.278 16.8697C5.604 18.1533 3.4785 18.9266 1.1775 18.9266C0.774 18.9266 0.387 18.909 0 18.8605C2.1795 20.2381 4.7625 21.0247 7.548 21.0247C16.602 21.0247 21.552 13.6734 21.552 7.30133C21.552 7.08814 21.5445 6.88231 21.534 6.67794C22.5105 5.99868 23.331 5.15035 24 4.1741Z" fill="#03A9F4"/>
                                        </svg>
                                    </a>
                                      <a className="transition hover:-translate-y-0.5" href="#">
                                       <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.16576 0 11.5381C0 17.297 4.38823 22.0704 10.125 22.936V14.8733H7.07812V11.5381H10.125V8.99609C10.125 6.10436 11.9165 4.50706 14.6576 4.50706C15.9705 4.50706 17.3438 4.73241 17.3438 4.73241V7.57186H15.8306C14.3399 7.57186 13.875 8.46126 13.875 9.37371V11.5381H17.2031L16.6711 14.8733H13.875V22.936C19.6118 22.0704 24 17.297 24 11.5381C24 5.16576 18.6274 0 12 0Z" fill="#1877F2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.6711 14.783L17.2031 11.468H13.875V9.31683C13.875 8.40992 14.3399 7.52592 15.8306 7.52592H17.3438V4.70372C17.3438 4.70372 15.9705 4.47974 14.6576 4.47974C11.9165 4.47974 10.125 6.06733 10.125 8.9415V11.468H7.07812V14.783H10.125V22.7967C10.7359 22.8883 11.3621 22.936 12 22.936C12.6379 22.936 13.2641 22.8883 13.875 22.7967V14.783H16.6711" fill="white"/>
</svg>

                                    </a>
                                      <a className="transition hover:-translate-y-0.5" href="#">
                                       <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.5 0H16.5C20.6415 0 24 3.2096 24 7.16749V15.7685C24 19.7264 20.6415 22.936 16.5 22.936H7.5C3.3585 22.936 0 19.7264 0 15.7685V7.16749C0 3.2096 3.3585 0 7.5 0ZM16.5 20.7858C19.395 20.7858 21.75 18.5352 21.75 15.7685V7.16754C21.75 4.40089 19.395 2.15029 16.5 2.15029H7.5C4.605 2.15029 2.25 4.40089 2.25 7.16754V15.7685C2.25 18.5352 4.605 20.7858 7.5 20.7858H16.5Z" fill="url(#paint0_linear_148_6599)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6 11.4681C6 8.30153 8.6865 5.73413 12 5.73413C15.3135 5.73413 18 8.30153 18 11.4681C18 14.6347 15.3135 17.2021 12 17.2021C8.6865 17.2021 6 14.6347 6 11.4681ZM8.25 11.468C8.25 13.4434 9.933 15.0518 12 15.0518C14.067 15.0518 15.75 13.4434 15.75 11.468C15.75 9.49124 14.067 7.88428 12 7.88428C9.933 7.88428 8.25 9.49124 8.25 11.468Z" fill="url(#paint1_linear_148_6599)"/>
<ellipse cx="18.4499" cy="5.30361" rx="0.7995" ry="0.764054" fill="url(#paint2_linear_148_6599)"/>
<defs>
<linearGradient id="paint0_linear_148_6599" x1="12.0001" y1="30.2049" x2="30.7177" y2="10.6187" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC107"/>
<stop offset="0.507" stopColor="#F44336"/>
<stop offset="0.99" stopColor="#9C27B0"/>
</linearGradient>
<linearGradient id="paint1_linear_148_6599" x1="12" y1="19.577" x2="20.1005" y2="11.1007" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC107"/>
<stop offset="0.507" stopColor="#F44336"/>
<stop offset="0.99" stopColor="#9C27B0"/>
</linearGradient>
<linearGradient id="paint2_linear_148_6599" x1="18.45" y1="6.38418" x2="19.5293" y2="5.25464" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC107"/>
<stop offset="0.507" stopColor="#F44336"/>
<stop offset="0.99" stopColor="#9C27B0"/>
</linearGradient>
</defs>
</svg>

                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <p className="py-5 text-gray-400 font-normal text-sm text-center w-fit mx-auto">
                    © 2022 AMR. All rights reserved.
                </p>
            </div>
        </footer>
    );
}