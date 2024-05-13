"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import flag from "../../public/Component 1.png";
import popup from "../../public/popup.png";
import cross from "../../public/cross.png";
import arrow from "../../public/arrow.png";

const PutPhoneNumberPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(value);
    setIsValid(value.length === 10);
    setShowPopup(false); // Change condition to check for greater than or equal to 10
  };

  const handleClearInput = () => {
    setPhoneNumber("");
    setIsValid(false);
  };
  const handleClick = () => {
    if (!isValid) {
      setShowPopup(true);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const phone = urlParams.get("phone") || "";
      setPhoneNumber(phone);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 bg-white">
      {/* Arrow icon */}
      <div className="flex w-full flex-row items-center justify-center relative">
        <Link className="absolute left-0" href="/phonenumber">
          <div className="w-8 h-8 flex">
            <Image src={arrow} alt="arrow" />
          </div>
        </Link>
        <h1 className="font-bold text-black text-xl">
          Enter your phone number
        </h1>
      </div>

      {/* Phone number input */}
      <div className="relative w-45 mt-9 border-2 border-green-600 flex items-center cursor-pointer rounded-md">
        {/* Flag image */}
        <Image className="w-8 h-auto ml-2" src={flag} alt="Indian Flag" />
        {/* +91 text */}
        <p className="text-lg mr-2 text-black ml-[11px]">+91</p>
        {/* Phone number input */}
        <input
          id="phone-input"
          className="flex-1 p-2 text-black focus:outline-none text-lg w-[220px]"
          type="number"
          maxLength={10}
          placeholder=" "
          value={phoneNumber}
          onChange={handleChange}
          required
        />
        {phoneNumber.length >= 10 && (
          <button
            className="absolute top-1/2 right-1 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={handleClearInput}
            type="button"
          >
            <Image src={cross} alt="cross" />
          </button>
        )}
        {!isValid && showPopup && (
          <Image
            src={popup}
            alt="popup"
            className="absolute top-full left-0 ml-[32px] mr-[54px] mt-1 object-center"
          />
        )}
      </div>

      <div className="text-gray-500 text-center mt-[55px] w-[50%]">
        <p className="">We will send an OTP to verify your number</p>
      </div>

      <div
        className={`flex absolute w-80 bottom-0 bg-[#04825C] justify-center flex-1 flex-grow items-center rounded-md h-12 mr-5 ml-5 ${
          !isValid ? "bg-gray-700 cursor-not-allowed opacity-50" : ""
        }`}
      >
        <Link href={isValid ? `/otppage?phone=${phoneNumber}` : ""}>
          <button
            className="text-white py-2 text-xl rounded-md"
            // Disable button only when phone number length is less than 10
            onClick={handleClick}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PutPhoneNumberPage;
