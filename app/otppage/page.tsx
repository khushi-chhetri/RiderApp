"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/arrow.png";
import pops from "../../public/otppopup.png";

const OTPPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(30);
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [showError, setShowError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  //countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= 1) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          return 0;
        }
      });
    }, 1000);
    // Cleanup countdown on component unmount
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setPhoneNumber(urlParams.get("phone") || "");
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value.replace(/\D/g, ""); // Remove non-digit characters
    setOTP(updatedOTP);
    setShowError(false);
    if (value && index < otp.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const isAllDigitsFilled = () => {
    return otp.every((value) => value.length === 1);
  };

  const handleSubmit = () => {
    if (!isAllDigitsFilled()) {
      setShowError(true); // Show error popup
      return;
    }
    // Redirect to the next page if all digits are filled
    window.location.href = "/after-otp"; // Modify this URL as necessary
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 bg-white">
      {/* Arrow icon */}
      <div className="flex w-full flex-row items-center justify-center relative">
        <Link className="absolute left-0" href="/putphonenumber">
          <div className="w-8 h-8 flex">
            <Image src={arrow} alt="arrow" />
          </div>
        </Link>
        <h1 className="font-bold text-black text-xl justify-center">
          Enter OTP
        </h1>
      </div>
      <p className="text-center mt-5 text-l text-green-700">
        An OTP was sent to{" "}
      </p>
      <p className="text-center mt-0 text-l text-black font-bold">
        +91 {phoneNumber}
      </p>
      <Link href={`/putphonenumber?phone=${phoneNumber}`}>
        <div className="text-center mt-2 text-l text-blue-600">
          Edit phone number
        </div>
      </Link>
      <form className="max-w-md">
        <div className="flex justify-between  ml-1 mt-8 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="number"
              className="p-3 w-12 h-12 mt-4 text-lg text-center text-gray-900 rounded-md border-2 border-green-700 focus:outline-none focus:border-green-700 mx-2.5"
              placeholder=""
              value={value}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          ))}
        </div>
        <p className="text-center mt-6 text-l text-black justify-center">
          Attempts left <span className="text-l text-green-700">(3/3)</span>
        </p>
        {timer === 0 ? (
          <p
            style={{ marginTop: "310px" }}
            className="text-center mt-80 mb-4 text-l text-blue-600"
          >
            Resend OTP
          </p>
        ) : (
          <p
            style={{ marginTop: "310px" }}
            className="text-center mt-80 mb-4 text-l text-[#04825C]"
          >
            Resend OTP in {timer}
          </p>
        )}
      </form>
      <div className="flex absolute w-80 bottom-0 bg-[#04825C] justify-center flex-1 flex-grow items-center rounded-md h-12 mr-5 ml-5">
        <button
          className="text-white py-2 text-2xl rounded-md w-full font-medium"
          onClick={handleSubmit}
          // Disable button only when phone number length is less than 10
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OTPPage;
