import { BsArrowUpRight } from "react-icons/bs";
import CardIndustry from "../elements/CardIndustry";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="container mx-auto space-y-12 px-4">
      <div className="flex flex-col justify-between flex-wrap lg:flex-row md:items-center space-y-6 md:text-center lg:text-start">
        <h1 className="font-titleFont text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          Experiences in
          <br className="hidden md:block" />
          worked with
          <br className="hidden md:block" />
          <span className="text-standardBlue"> industries</span>
        </h1>
        <p>
          At our model agency, we take great pride in{" "}
          <br className="hidden md:block" /> our rich and diverse portfolio of
          experiences <br className="hidden md:block" /> working with a wide
          array of industries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center gap-x-4">
          <div className="text-sm md:hidden xl:block">
            32+ Industries <span className="pl-4 font-light">|</span>
          </div>
          <div>
            <button className="space-x-8 rounded-full flex items-center bg-white text-standardBlack font-semibold pl-6 p-2 gap-2">
              <span>Contact Us</span>
              <BsArrowUpRight className="bg-standardGreen p-2 rounded-full w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CardIndustry
          title="F & B"
          image="/assets/images/img9.jpg"
          number={11}
          link="#Categories"
          style="md:mt-12"
        />
        <CardIndustry
          title="Homeware"
          image="/assets/images/img5.jpg"
          number={23}
          link="#Categories"
          style=""
        />
        <CardIndustry
          title="Fashion"
          image="/assets/images/img3.jpg"
          number={36}
          link="#Categories"
          style="md:mt-24"
        />
        <CardIndustry
          title="Beauty"
          image="/assets/images/img6.jpg"
          number={21}
          link="#Categories"
          style=""
        />
      </div>
    </section>
  );
};

export default AboutUs;
