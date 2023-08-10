import { img1 } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsTwitter, BsArrowUpRight } from "react-icons/bs";

const ContactUs = () => {
  return (
    <section id="ContactUs" className="container mx-auto space-y-6 px-4">
      <h1 className="font-titleFont md:text-center text-white font-bold text-2xl md:text-3xl lg:text-5xl">
        <span className="text-standardBlue">Connect</span> and{" "}
        <br className="hidden md:block" />
        Collaborate with Us
      </h1>
      <div className="flex gap-4 place-content-center text-white">
        <div className="flex items-center gap-x-2">
          <BsInstagram />
          <span>Instagram</span>
        </div>
        <div className="text-standardOrange text-[20px]">+</div>
        <div className="flex items-center gap-x-2">
          <BsTwitter />
          <span>Twitter</span>
        </div>
      </div>
      <div className="relative">
        <Image src={img1} alt="Models" />
        <button className="absolute bottom-2 md:bottom-[45%] right-[20%] md:right-[40%] space-x-8 rounded-full flex items-center bg-standardGreen text-standardBlack font-semibold pl-6 p-2 gap-2">
          <span>Contact Us</span>
          <BsArrowUpRight className="bg-white p-2 rounded-full w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
