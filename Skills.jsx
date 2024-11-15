import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Js from '../assets/js.png';
import ReactJs from '../assets/reactjs.png';
import GitHub from '../assets/git.png';
import TailwindCss from '../assets/tailwind-css.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full min-h-screen bg-[#82659D] text-[#E8D8F2] flex flex-col justify-center items-center p-4'>
            {/* Main Section */}
            <div className='max-w-[800px] w-full text-center mb-8'>
                <p className='text-4xl sm:text-6xl font-bold inline border-b-4 border-[#2E0F47]'>
                    Skills
                </p>
                <p className='mt-4 text-lg sm:text-xl text-[#ffffff] py-4'>These are The Technologies I've Worked With:</p>
            </div>
            
            {/* Skills Grid */}
            <div className='max-w-[800px] w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center'>
                {/* Skill Card: HTML */}
                <div className='flex flex-col items-center'>
                    <img src={Html} alt="HTML icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>HTML</p>
                </div>
                
                {/* Skill Card: CSS */}
                <div className='flex flex-col items-center'>
                    <img src={Css} alt="CSS icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>CSS</p>
                </div>

                {/* Skill Card: Tailwind CSS */}
                <div className='flex flex-col items-center'>
                    <img src={TailwindCss} alt="Tailwind CSS icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>Tailwind CSS</p>
                </div>
                
                {/* Skill Card: JavaScript */}
                <div className='flex flex-col items-center'>
                    <img src={Js} alt="JavaScript icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>JavaScript</p>
                </div>
                
                {/* Skill Card: React */}
                <div className='flex flex-col items-center'>
                    <img src={ReactJs} alt="ReactJS icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>React-JS</p>
                </div>
                
                {/* Skill Card: GitHub */}
                <div className='flex flex-col items-center'>
                    <img src={GitHub} alt="GitHub icon" className='w-20 h-20 mb-2 shadow-md transition-transform duration-500 hover:scale-110' />
                    <p className='text-xl font-semibold'>GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
