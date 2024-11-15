import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full min-h-screen bg-[#82659D] text-[#E8D8F2] flex flex-col justify-center items-center p-4'>
            {/* Main Section */}
            <div className='max-w-[800px] w-full text-center mb-8'>
                <p className='text-4xl sm:text-6xl font-bold inline border-b-4 border-[#2E0F47]'>
                    Contact
                </p>
                <p className='text-[#ffffff] mt-4 text-lg sm:text-2xl py-4'>
                    Submit the form below or shoot me an email - sabkas24@gmail.com
                </p>
            </div>

            {/* Form Section */}
            <form 
                method="POST" 
                action="https://getform.io/f/ayvvyklb" // your Getform endpoint
                className='w-full max-w-[600px] flex flex-col items-center'
            >
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    required
                    className='w-full p-2 mb-4 bg-[#E8D8F2] text-[#82659D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E0F47]'
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    required
                    className='w-full p-2 mb-4 bg-[#E8D8F2] text-[#82659D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E0F47]'
                />
                <textarea 
                    placeholder="Message" 
                    name="message" 
                    rows="6" 
                    required
                    className='w-full p-2 mb-6 bg-[#E8D8F2] text-[#82659D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E0F47]'
                ></textarea>
                
                {/* Let’s Collaborate */}
                <button
                    type="submit"
                    className='text-black group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#dec0f1] hover:border-[#dec0f1]'
                >
                    Let’s Collaborate
                </button>                   
            </form>
        </div>
    );
};

export default Contact;
