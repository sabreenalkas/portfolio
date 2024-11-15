import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import sabreenImage from '../assets/sabreen.png';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#82659D] flex items-center">
            {/* Container for text and image */}
            <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between w-full">
                
                {/* Text Content */}
                <div className="text-center md:text-left flex flex-col justify-center h-full md:w-1/2">
                    <p className="text-[#E6E6FA] text-lg">Hi, My Name Is :</p>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-[#ebd8d0]">
                        Sabreen M A AbuAlkas
                    </h1>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#e5d9f2] mt-2 md:mt-0">
                        I'm a FrontEnd Developer.
                    </h2>
                    <p className="py-4 max-w-[900px] mx-auto md:mx-0 text-justify leading-relaxed text-lg text-[#ffffff] font-sans mb-4">
                        I am a front-end developer specializing in building responsive, user-friendly,
                        and dynamic web applications that offer an engaging experience across all devices.
                        I am dedicated to crafting scalable solutions that not only meet client needs
                        but also make a memorable impact.
                    </p>
                    
                    {/* React-scroll Link */}
                    <div>
                        <Link
                            to="work"  // Target "work" section
                            smooth={true}  // Smooth scroll
                            duration={500}  // Duration for scroll
                            className="text-black group border-2 px-6 py-2 my-2 flex items-center justify-center hover:bg-[#dec0f1] hover:border-[#dec0f1] rounded-sm max-w-fit"
                        >
                            View Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#E6E6FA] shadow-lg">
                        <img
                            src={sabreenImage}
                            alt="Sabreen M A AbuAlkas"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
