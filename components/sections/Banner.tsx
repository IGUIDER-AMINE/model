import { img1 } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BsArrowUpRight,
  BsFillSendFill,
  BsFillStarFill,
  BsFillTrophyFill,
  BsFillEnvelopePaperFill,
} from "react-icons/bs";

const Banner = () => {
  return (
    <section id="Banner" className="container mx-auto space-y-12 px-4">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="text-white gap-4 flex md:items-center flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex relative"
            >
              <BsFillTrophyFill className="text-standardBlue bg-standardSlate rounded-full p-2 h-10 w-10" />
              <BsFillEnvelopePaperFill className="text-standardGreen bg-standardSlate rounded-full p-2 h-10 w-10 relative left-[-22px]" />
              <BsFillSendFill className="text-standardPink bg-standardSlate rounded-full p-2 h-10 w-10 relative left-[-44px]" />
              <BsFillStarFill className="text-standardOrange bg-standardSlate relative left-[-65px] rounded-full p-2 h-10 w-10" />
            </motion.div>
            <div className="space-x-4 relative md:left-[-45px]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-full p-2 bg-standardOrange text-xs"
              >
                +21 companies
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-semibold text-sm"
              >
                Trust our models
              </motion.span>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-titleFont text-white font-bold text-2xl md:text-3xl lg:text-5xl"
          >
            Professional
            <br className="hidden lg:block" />
            <span className="text-standardBlue"> Models</span> For Your Needs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unveiling Professional Models Taillored to Your Every Need Your{" "}
            <br className="hidden xl:block" />
            Ultimate Model Website Agency. where we take pride in presenting{" "}
            <br className="hidden xl:block" /> you with an exclusive selection
            of professional models perfectly
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 md:gap-6"
          >
            <button className="md:space-x-8 rounded-full flex items-center bg-standardGreen text-standardBlack font-semibold md:pl-6 p-2 gap-2">
              <span>Explore Talent</span>
              <BsArrowUpRight className="bg-white p-2 rounded-full w-8 h-8" />
            </button>
            <Link href="#" className="text-white">
              Be Model
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src={img1} alt="Model" priority className="hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
