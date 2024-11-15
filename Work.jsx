import React from 'react';
import { data } from "../data/data.js";  // Import project data

const Work = () => {
    const project = data;  // Store the data

    return (
        <div id="work" className="w-full min-h-screen text-[#E8D8F2] bg-[#82659D] flex flex-col justify-center items-center p-4">
            <div className="max-w-[1000px] w-full">
                <div className="text-center pb-8">
                    <p className="text-5xl sm:text-6xl font-bold inline border-b-4 text-[#E8D8F2] border-[#2E0F47]">
                        Work
                    </p>
                    <p className="mt-4 text-lg sm:text-2xl text-[#ffffff] py-4">Check out some of my work</p>
                </div>

                {/* Container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#2E0F47] group container rounded-lg flex justify-center items-center mx-auto content-div transition-transform duration-500 hover:scale-105 p-6 bg-cover bg-center"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xl sm:text-2xl font-semibold text-[#E8D8F2] tracking-wide">
                                    {item.name}
                                </span>
                                <div className="pt-6">
                                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="text-center rounded-lg px-4 py-2 m-2 bg-[#E8D8F2] text-[#82659D] font-semibold text-md sm:text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
