import { BsArrowUpRight } from "react-icons/bs";

interface categoryType {
  title: string;
  description: string;
  number: number;
  nationality: string;
  infos: string;
  link: string;
}

const CategoryModel = ({
  title,
  description,
  number,
  nationality,
  infos,
  link,
}: categoryType) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-6 lg:grid-cols-11 items-center gap-2">
        <div className="col-span-5">
          <h1 className="font-titleFont text-xl md:text-3xl font-bold text-white">
            {title}
          </h1>
          <div className="truncate text-sm md:text-[16px]">{description}</div>
        </div>
        <div className="col-span-5 flex gap-4">
          <div>
            <div className="font-titleFont md:text-lg font-semibold text-white text-md">
              {number}
            </div>
            <div className="text-sm md:text-[16px]">Models</div>
          </div>
          <div>
            <div className="font-titleFont md:text-lg text-md font-semibold text-white truncate w-[90%] md:w-auto">
              {nationality}
            </div>
            <div className="text-sm md:text-[16px]">{infos}</div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <button className="border rounded-full p-3">
            <BsArrowUpRight className="text-white sm:h-8 sm:w-8" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CategoryModel;
