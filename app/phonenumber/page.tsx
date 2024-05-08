import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PhoneNumberPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Logo with background box */}
      <div className="mb-10 bg-green-50 p-8 rounded-md relative">
        <Image
          src="/Frame.png" // Assuming Frame.png is stored in the public directory
          alt="Logo"
          width={300} // Increased width
          height={240} // Increased height
        />
      </div>
      {/* Enter phone number text */}
      <p className="font-bold text-black text-xl mb-6">Enter phone number</p> {/* Increased font size */}
      {/* Another image with Link */}
      <div>
        <Link href="/putphonenumber">
          
            <Image
              src="/another-image.png" // Assuming another-image.png is stored in the public directory
              alt="Another Image"
              width={300} // Increased width
              height={240} // Increased height
            />
          
        </Link>
      </div>
      {/* Phone number input */}
    </div> 
  );
};

export default PhoneNumberPage;
