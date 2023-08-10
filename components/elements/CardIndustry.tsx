import Image from "next/image";

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
      <Image
        src={image}
        className="h-[440px] w-[312px] grayscale group-hover:grayscale-0"
        width={312}
        height={440}
        alt="Model"
      />
    </div>
  );
};

export default CardIndustry;
