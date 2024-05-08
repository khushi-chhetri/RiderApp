import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LogoWithFlag: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Image
        src="/logo.png" // Assuming logo.png is stored in the public directory
        alt="Logo"
        width={192} // Adjust the width as needed
        height={192} // Adjust the height as needed
        className="mb-10" // Add any additional classes as needed
      />
      <Link href="/phonenumber">phono</Link>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Image
          src="/flag.png" // Assuming flag.png is stored in the public directory
          alt="Flag"
          width={96} // Adjust the width as needed
          height={96} // Adjust the height as needed
        />
      </div>
    </div>
  );
};

export default LogoWithFlag;
