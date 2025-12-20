import Hero from "../components/HomeComponents/Hero";
import servicesImage from "../assets/images/services.png"
import grayShape from "../assets/images/shape-gray.svg"
import services1 from "../assets/images/services-1.png"
import shapeRight from "../assets/images/services-shape-right.svg"
import shapeLeft from "../assets/images/services-shape-left.svg"

import Button from "../components/Button";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function Services() {
    usePageMetadata(
        "Our Services",
        "Discover our wide range of car services and solutions to meet all your automotive needs."
    )   
    return (
       <main>
         <Hero
            image={servicesImage}
            isCenter={true}
            header="Odio tellus aliquet at tellus. Fames nulla nulla consequs"
            description="Odio tellus aliquet at tellus. Fames nulla nulla consequat amet, facilisis. Ultrices pulvinar auctor id elementum nisi tincidunt tristique vestibulum. At lectus non, gravida."
        />
        <div className="pt-12 lg:pt-26 relative">
            <img src={grayShape} alt="Shape" className="absolute top-0 start-0 z-10"/>
            <div className="main-container relative z-20">
                <h2 className="font-medium text-4xl lg:text-5xl">
                    We offer Services that connect you to your users
                </h2>
                <p className="text-lg text-[#363535] font-normal mt-8 max-w-100">
                    Nowadays, it isn’t uncommon to see rapidly adopting a digital lending strategy to streamline the isn’t uncommon to see lenders rapidly.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 md:gap-y-16 mt-16">
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={services1} alt="Services 1" className="w-full max-w-[255px] h-full pb-6 mx-auto max-h-[295px] ronuded" />
                            <div className="bg-[#F3F3F3] w-full h-[192px] absolute bottom-0 left-0 -z-10"></div>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl">
                                Book A Call
                            </h2>
                            <p className="text-sm text-[#363535] font-normal mt-2">
                                Pellentesque sodales nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 rounded-[20px] bg-black px-10 pb-20 pt-15 relative overflow-hidden">
                    <img src={shapeRight} alt="Shape" className="absolute top-0 end-0 z-10"/>
                    <img src={shapeLeft} alt="Shape" className="absolute bottom-0 start-0 z-10"/>
                    <div className="relative z-20">
                        <h2 className="text-white text-3xl max-w-120 mx-auto lg:text-5xl text-center mb-2 font-bold">
                            Want to talk to a marketing expert?
                        </h2>
                        <div className="flex items-center justify-center mt-15">
                            <Button to="/book-appointment" classes="px-10">
                                Schedule appointment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </main>
    )
}