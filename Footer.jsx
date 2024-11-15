import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-[#5F2A7F] text-[#E6E6FA] py-8 mt-8">
            <div className="max-w-[1000px] mx-auto text-center">
                <p className="text-3xl font-semibold uppercase tracking-widest mb-2 text-[#f9f9fa]">
                    Eng:
                </p>
                    <p className="text-3xl font-extrabold mt-2 text-[#dec0f1]">
                    Sabreen M A AbuAlkas
                </p>
                    <p className="text-sm mt-4 italic font-medium">
                    All Rights Reserved &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
