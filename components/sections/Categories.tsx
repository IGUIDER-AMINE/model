import React from "react";
import CategoryModel from "../elements/CategoryModel";
import { categoriesData } from "@/util/data";

const Categories = () => {
  return (
    <section id="Categories" className="container mx-auto space-y-12 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 text-center lg:text-start">
        <h1 className="font-titleFont text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          Provided models
          <br className="hidden md:block" />
          by
          <span className="text-standardBlue"> the categories</span>
        </h1>
        <p>
          In our relentless pursuit of excellence, we have{" "}
          <br className="hidden md:block" /> meticulously organized our
          exceptional models <br className="hidden md:block" /> into thoughtully
          curated categories.
        </p>
      </div>
      <div className="space-y-6">
        {categoriesData?.map((item, index) => {
          return (
            <CategoryModel
              key={index}
              title={item?.title}
              description={item?.description}
              number={item?.number}
              nationality={item?.nationality}
              infos={item?.infos}
              link={item?.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
