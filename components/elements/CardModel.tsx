import Image from "next/image";
import React from "react";

interface cardTypes {
  image: string;
  fullName: string;
  information: string;
}

const CardModel = ({ image, fullName, information }: cardTypes) => {
  return (
    <div className="group">
      <div className="relative group-hover:z-10">
        <Image
          src={image}
          alt="Model"
          width={337.5}
          height={450}
          className="h-[450px] w-full grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:border-4"
        />
        <div className="absolute bottom-0 hidden px-4 py-2 group-hover:flex gap-x-2 w-full justify-between">
          <div className="text-white">
            <h2 className="font-titleFont truncate font-semibold">
              {fullName}
            </h2>
            <div className="truncate">{information}</div>
          </div>
          <div>
            <button className="rounded-full text-standardBlack font-semibold bg-white px-4 py-2">
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModel;
