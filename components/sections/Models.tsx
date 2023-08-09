import {
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "@/public/assets";
import Image from "next/image";
import React from "react";

const Models = () => {
  return (
    <section id="Models" className="space-y-16">
      <div className="container mx-auto space-y-6 px-4">
        <h1 className="font-titleFont text-center text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          Meet Our Diverse Roster
          <br className="hidden md:block" />
          of
          <span className="text-standardBlue"> Professional </span>
          Models
        </h1>
        <p className="text-center">
          Here, we take immense in introducing you to our exceptional{" "}
          <br className="hidden md:block" /> roster of professional models, each
          one a shinig star in their own right
        </p>
      </div>
      <div className="grid grid-cols-4">
        <Image src={img2} alt="Model" className="h-full grayscale" />
        <Image src={img6} alt="Model" className="h-full grayscale" />
        <Image src={img3} alt="Model" className="h-full" />
        <Image src={img5} alt="Model" className="h-full grayscale" />
        <Image src={img7} alt="Model" className="h-full grayscale" />
        <Image src={img3} alt="Model" className="h-full grayscale" />
        <Image src={img8} alt="Model" className="h-full grayscale" />
        <Image src={img4} alt="Model" className="h-full grayscale" />
      </div>
    </section>
  );
};

export default Models;
