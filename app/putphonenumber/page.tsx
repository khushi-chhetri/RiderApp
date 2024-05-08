import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PutPhoneNumberPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Arrow icon */}
      <Link href="/login"></Link>
      <div className="absolute top-4 left-4">
        <Image src="/arrow.png" width={20} height={20} alt='arrow'/>
      </div>
      {/* Enter phone number text */}
      <p className="font-bold text-black text-xl mb-6">Enter your phone number</p> {/* Increased font size */}
      {/* Phone number input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {/* Indian flag image */}
          <Image
            src="/Component 1.png" // Assuming indian-flag.png is stored in the public directory
            alt="Indian Flag"
            width={24}
            height={24}
          />
          {/* +91 text */}
          <span className="ml-1 text-black">+91</span>
        </div>
        <input
          type="text"
          placeholder=""
          className="pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <p className="text-gray-500 text-center mt-4">We will send an OTP to</p>
       <p className="text-gray-500 text-center">verify your number</p>
    </div>
  );
};

export default PutPhoneNumberPage;
