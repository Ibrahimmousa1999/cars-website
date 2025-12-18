import heroShapeTopLeft from "../assets/images/hero-shape-top-left.svg";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroShapeBottomRight from "../assets/images/hero-shape-bottom-right.svg";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

// Custom styles for date picker
const customDatePickerStyles = `
  .react-datepicker {
    font-family: 'Inter', sans-serif;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .react-datepicker__header {
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #111827;
  }
  
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #000000;
    color: white;
  }
  
  .react-datepicker__day--today {
    font-weight: bold;
  }
  
  .react-datepicker__time-container {
    border-left: 1px solid #e5e7eb;
  }
  
  .react-datepicker__time-box {
    width: 100% !important;
  }
  
  .react-datepicker__time-list-item {
    padding: 8px 10px;
  }
  
  .react-datepicker__time-list-item--selected {
    background-color: #000000 !important;
    color: white;
  }
  
  .react-datepicker__navigation--next {
    right: 10px;
  }
  
  .react-datepicker__navigation--previous {
    left: 10px;
  }
  
  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
    border-top: none;
    border-bottom-color: #f9fafb;
  }
  
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding: 0;
  }
  
  .custom-datepicker {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

gsap.registerPlugin(ScrollTrigger);

// Define service options for the select field
const serviceOptions = [
  { value: 'oil_change', label: 'Oil Change' },
  { value: 'tire_rotation', label: 'Tire Rotation' },
  { value: 'brake_service', label: 'Brake Service' },
  { value: 'engine_diagnostic', label: 'Engine Diagnostic' },
  { value: 'battery_check', label: 'Battery Check' },
  { value: 'ac_service', label: 'A/C Service' },
  { value: 'transmission_service', label: 'Transmission Service' },
  { value: 'other', label: 'Other Service' },
];

// Define types for react-select styles
type SelectStyles = {
  control: (provided: React.CSSProperties) => React.CSSProperties;
  valueContainer: (provided: React.CSSProperties) => React.CSSProperties;
  input: (provided: React.CSSProperties) => React.CSSProperties;
  placeholder: (provided: React.CSSProperties) => React.CSSProperties;
  singleValue: (provided: React.CSSProperties) => React.CSSProperties;
  menu: (provided: React.CSSProperties) => React.CSSProperties;
  option: (provided: React.CSSProperties, state: { isSelected: boolean }) => React.CSSProperties;
};

// Custom styles for react-select to match your form
const customStyles: SelectStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '56px',
    border: '1px solid #C3CAD9',
    borderRadius: '0.375rem',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#C3CAD9',
    },
    zIndex: 10, // Lower than menu but higher than other content
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 16px',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#959EAD',
    fontSize: '0.875rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#12022F',
    fontSize: '0.875rem',
  }),
  menu: (provided) => ({
    ...provided,
    border: '1px solid #E5E7EB',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    zIndex: 50, // Ensure it appears above other elements
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#12022F' : 'white',
    color: state.isSelected ? 'white' : '#12022F',
    '&:hover': {
      backgroundColor: state.isSelected ? '#12022F' : '#F9FAFB',
    },
    padding: '10px 16px',
    fontSize: '0.875rem',
  }),
};

export default function BookAppointment(){
      const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
      const [selectedService, setSelectedService] = useState<SelectOption | null>(null);
      const [selectedOtherServices, setSelectedOtherServices] = useState<readonly SelectOption[]>([]);
      
      // Add custom styles for date picker
      useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = customDatePickerStyles;
        document.head.appendChild(styleElement);
        
        return () => {
          document.head.removeChild(styleElement);
        };
      }, []);
      
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
            <div ref={sectionRef} className="max-w-[1360px] mx-auto mt-12 lg:mt-28">
                <div className="relative bg-black lg:rounded-xl p-8 lg:py-20 lg:px-18 grid lg:grid-cols-12 gap-10 overflow-visible">
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
                        <h2 ref={headingRef} className="text-white text-5xl font-semibold">Book appointment</h2>
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
                            Book appointment
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
                                    <label htmlFor="date" className="input-label">Appointment Date</label>
                                    <div className="relative">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date: Date | null) => setSelectedDate(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={30}
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            className="w-full ps-10 pe-5 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            minDate={new Date()}
                                            placeholderText="Select date and time"
                                            calendarClassName="custom-datepicker"
                                        />
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="service_required" className="input-label">Service Required</label>
                                    <Select
                                        id="service_required"
                                        name="service_required"
                                        options={serviceOptions}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        placeholder="Select a service..."
                                        isSearchable={true}
                                        value={selectedService}
                                        onChange={(selectedOption) => setSelectedService(selectedOption)}
                                        styles={customStyles}
                                        components={{
                                            IndicatorSeparator: () => null
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="other_services" className="input-label">Other Services</label>
                                    <Select
                                        id="other_services"
                                        name="other_services"
                                        options={serviceOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        placeholder="Select additional services..."
                                        isSearchable={true}
                                        isMulti
                                        value={selectedOtherServices}
                                        onChange={(selectedOptions) => setSelectedOtherServices(selectedOptions || [])}
                                        styles={{
                                            ...customStyles,
                                            control: (base) => ({
                                                ...base,
                                                minHeight: '56px',
                                                border: '1px solid #C3CAD9',
                                                borderRadius: '0.5rem',
                                                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                            }),
                                            multiValue: (base) => ({
                                                ...base,
                                                backgroundColor: '#F3F4F6',
                                                borderRadius: '0.375rem',
                                                padding: '0.25rem 0.5rem',
                                                marginRight: '0.5rem',
                                                marginBottom: '0.25rem'
                                            }),
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                color: '#1F2937',
                                                fontSize: '0.875rem',
                                                lineHeight: '1.25rem'
                                            })
                                        }}
                                        components={{
                                            IndicatorSeparator: () => null
                                        }}
                                    />
                                </div>
                                <Button classes="py-4">
                                    Book appointment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}