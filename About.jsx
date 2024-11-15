import React, { useState, useEffect } from 'react';
import sabreenImage from '../assets/sabreen.png';
import './About.css';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div name='about' className='w-full h-screen bg-[#82659D] text-[#E8D8F2] flex flex-col justify-center items-center pt-[70px] p-4'>
      {/* Container for Text and Image */}
      <div className={`max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between w-full transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
        
        {/* Text Content */}
        <div className='max-w-[800px] w-full text-center mb-8'>
          <p className='text-4xl sm:text-6xl font-bold inline border-b-4 border-[#2E0F47] mb-8'> 
            About
          </p>
          <div className="text-3xl font-bold text-[#EBD8D0] my-4">
            <p>Hi, I'm <span className='text-4xl text-[#f9f9fa]'>Sabreen</span>, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-justify leading-relaxed text-lg text-[#ffffff] font-sans mb-4">
            <p>
              I am passionate about front-end development and specialize in creating websites for individuals
              and businesses that are responsive, dynamic, and user-friendly.
              I focus on delivering solutions tailored to each client's needs, ensuring a seamless and enjoyable 
              experience. With an eye for detail and a commitment to quality, I strive to make each project 
              impactful and memorable. I'm always eager to learn and stay updated with the latest in web 
              development to deliver the best results.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2 mt-8">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#E6E6FA] shadow-lg hover:scale-105 transition-all">
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

export default About;
