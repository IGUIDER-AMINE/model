import { logo1, logo2, logo3, logo4 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <section id="Brand" className="container mx-auto space-y-12 px-4 lg:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-8">
        <Image src={logo1} alt="Logo" />
        <Image src={logo3} alt="Logo" />
        <Image src={logo4} alt="Logo" />
        <Image src={logo2} alt="Logo" />
      </div>
    </section>
  );
};

export default Brands;
