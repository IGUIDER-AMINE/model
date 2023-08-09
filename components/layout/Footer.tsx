import React from "react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="Footer" className="container mx-auto px-4 pb-24">
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-8">
        <div className="space-y-8">
          <h1 className="font-titleFont font-bold text-3xl text-standarOrange">
            FRESH
          </h1>
          <div className="flex gap-4">
            <BsTwitter className="w-6 h-6" />
            <AiOutlineGoogle className="w-6 h-6" />
            <BsInstagram className="w-6 h-6" />
            <FaFacebookF className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <h1 className="font-titleFont font-bold text-2xl">Our Services</h1>
          <div className="space-y-4 flex flex-col text-standarSlate">
            <Link href="#">Pricing</Link>
            <Link href="#">Tracking</Link>
            <Link href="#">Report a Bug</Link>
            <Link href="#">Terms of service</Link>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-titleFont font-bold text-2xl">Our Company</h1>
          <div className="space-y-4 flex flex-col text-standarSlate">
            <Link href="#">Reporting</Link>
            <Link href="#">Get in Touch</Link>
            <Link href="#">Management</Link>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-titleFont font-bold text-2xl">Address</h1>
          <div className="space-y-4 flex flex-col text-standarSlate">
            <Link href="#Home">121 King St,</Link>
            <Link href="#Products">888-123-42278</Link>
            <Link href="#Store">hellotazrin7@gmail.com</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
