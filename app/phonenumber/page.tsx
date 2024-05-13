"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame from "../../public/Frame.png";

const PhoneNumberPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen max-h-screen w-screen bg-white">
      {/* Logo with background box */}
      <div className="w-full bg-[#04825C1A] bg-opacity-10 flex flex-row items-center justify-center">
        <Image
          src={Frame} // Assuming Frame.png is stored in the public directory
          alt="Logo"
          className="mt-8"
        />
      </div>
      <div className="w-full flex-1 flex-grow px-5 flex flex-col items-center justify-center">
        {/* Enter phone number text */}
        <p className="font-poppins font-semibold text-[22px] w-full mt-10 items-center text-black ">
          Enter phone number
        </p>{" "}
        <div className="mt-5">
          <Link href="/putphonenumber">
            <Image
              src="/another-image.png" // Assuming another-image.png is stored in the public directory
              alt="Another Image"
              width={320} // Increased width
              height={48}
            />
          </Link>
        </div>
        <div className="w-full flex-1 flex-grow" />
        <div className="font-normal text-xs text-center mb-9 w-4/5 text-black">
          If you are creating a new account,
          <a href="https://suggaa.in/privacy">
            <span className="text-blue-500 underline">Terms & </span>
            <span className="text-blue-500 underline">Conditions</span> and{" "}
          </a>
          <a href="https://suggaa.in/privacy">
            <span className="text-blue-500 underline">Privacy Policy</span>
          </a>{" "}
          will apply.
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberPage;
