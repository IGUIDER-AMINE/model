import CardModel from "../elements/CardModel";
import { modelsData } from "@/util/data";
import { motion } from "framer-motion";

const Models = () => {
  return (
    <section id="Models" className="space-y-16">
      <div className="container mx-auto md:text-center space-y-6 px-4">
        <h1 className="font-titleFont text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          Meet Our Diverse Roster
          <br className="hidden md:block" />
          of
          <span className="text-standardBlue"> Professional </span>
          Models
        </h1>
        <p className="">
          Here, we take immense in introducing you to our exceptional{" "}
          <br className="hidden md:block" /> roster of professional models, each
          one a shinig star in their own right
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {modelsData?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CardModel
                image={item?.image}
                fullName={item?.fullName}
                information={item?.information}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Models;
