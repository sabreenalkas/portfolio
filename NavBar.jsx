import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import resumeImage from '../assets/resume.jpeg'; 

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const openResume = () => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>My Resume</title></head><body style="text-align: center; padding: 20px;">');
        newWindow.document.write(`<img src="${resumeImage}" alt="Resume" style="width: 100%; max-width: 800px;" />`);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
    };

    return (
        <div className='fixed w-full h-[88px] flex justify-between items-center px-8 bg-[#5F2A7F] text-[#E6E6FA] shadow-lg'>
            {/* Logo */}
            <div className='transform -translate-x-2'>
                <img src={logo} alt='Logo' style={{ width: '60px' }} className="transition-all duration-300 hover:scale-105" />
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-8'>
                <li className='text-lg font-bold hover:text-[#dec0f1]'>
                    <Link activeClass="active" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='text-lg font-bold hover:text-[#dec0f1]'>
                    <Link activeClass="active" to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='text-lg font-bold hover:text-[#dec0f1]'>
                    <Link activeClass="active" to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='text-lg font-bold hover:text-[#dec0f1]'>
                    <Link activeClass="active" to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='text-lg font-bold hover:text-[#dec0f1]'>
                    <Link activeClass="active" to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={`${!nav ? 'hidden' : 'absolute'} top-0 left-0 w-full h-screen bg-[#82659D] flex flex-col justify-center items-center`}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons with Links */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 space-y-6'>
                <ul>
                    {/* LinkedIn Link */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-[#E6E6FA]'
                            href="https://www.linkedin.com/in/sabreen-alkass"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>

                    {/* GitHub Link */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-[#E6E6FA]'
                            href="https://github.com/sabreenalkas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    {/* Email Link */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-[#E6E6FA]'
                            href="mailto:sabkas24@gmail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    {/* Resume Link */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <button
                            className='flex justify-between items-center w-full text-[#E6E6FA]'
                            onClick={openResume}
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
