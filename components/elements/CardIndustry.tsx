import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface industryType {
  title: string;
  image: string;
  number: number;
  link: string;
  style: string;
}

const CardIndustry = ({ title, image, number, style, link }: industryType) => {
  return (
    <div className={`group ${style}`}>
      <div className="relative text-white">
        <Image
          src={image}
          className="h-[440px] w-[312px] grayscale group-hover:grayscale-0"
          width={312}
          height={440}
          alt="Model"
        />
        <div className="absolute space-y-3 top-10 left-14">
          <h2 className="font-titleFont font-bold text-3xl">
            {title} <br /> Industry
          </h2>
          <div className="text-sm hidden group-hover:block">
            {number}+ companies
          </div>
          <button className="rounded-full text-standardBlack font-semibold bg-white px-4 py-2 items-center gap-2 text-sm hidden group-hover:flex">
            See More <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardIndustry;
