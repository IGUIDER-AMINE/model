import { img1 } from "@/public/assets";
import Image from "next/image";
import React from "react";
import {
  BsInstagram,
  BsTwitter,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

const ContactUs = () => {
  return (
    <section id="ContactUs" className="container mx-auto space-y-6 px-4">
      <h1 className="font-titleFont text-center text-white font-bold text-4xl">
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
      <div>
        <Image src={img1} alt="Models" />
        <button>
          <span>Contact Us</span>
          <BsFillArrowUpRightCircleFill className="bg-white rounded-full text-standardBlack p-4" />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
