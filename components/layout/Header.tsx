import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowProducts(false);
    const href = e.currentTarget.href;
    const taretId = href.replace(/.*\#/, "");
    const elem = document.getElementById(taretId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <section className="w-full sticky text-standarGray bg-standardBlack top-0 z-20">
      <div className="text-[15px] font-medium py-4 flex items-center justify-between container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl text-white font-titleFont font-semibold text-standarOrange">
            BR. MODELS
          </span>
        </motion.div>
        <div className="hidden xl:inline-flex">
          <ul className="flex gap-x-5 items-center">
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                className="hover:text-white"
                href="#Banner"
                onClick={handleScroll}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                className="hover:text-white"
                href="#AboutUs"
                onClick={handleScroll}
              >
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                className="hover:text-white"
                href="#Models"
                onClick={handleScroll}
              >
                Models
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                className="hover:text-white"
                href="#ContactUs"
                onClick={handleScroll}
              >
                Productions
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                className="hover:text-white"
                href="#Categories"
                onClick={handleScroll}
              >
                Blog
              </Link>
            </motion.li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div
            role="button"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden xl:block bg-standarYellow rounded-full"
          >
            <div className="flex items-center gap-1 rounded-full bg-standardGray/30 py-1 px-2">
              <BsMoon className="text-white bg-standardBlack rounded-full p-1 h-5 w-5" />
              <BsSun className="text-white h-4 w-4" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden xl:block"
          >
            <button className="flex items-end gap-2 text-[14px] rounded-full border border-white text-white px-8 py-3">
              Hire Us
            </button>
          </motion.div>
        </div>
        <div
          onClick={() => setShowProducts(true)}
          className="w-6 h-5 flex flex-col justify-between items-center xl:hidden text-4xl cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-standardGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-standardGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-standardGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {/* sideBar */}
        {showProducts ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex z-20 flex-col gap-y-4 p-4 bg-standardBlack top-0 left-0 w-full h-screen absolute"
          >
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-titleFont text-white font-semibold">
                  BR. MODELS
                </span>
              </motion.div>
              <MdOutlineClose
                onClick={() => setShowProducts(false)}
                className="text-3xl text-standardGreen cursor-pointer absolute top-4 right-4"
              />
            </div>
            <ul className="space-y-4">
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="#Banner" onClick={handleScroll}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#AboutUs" onClick={handleScroll}>
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="#Models" onClick={handleScroll}>
                  Models
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="#ContactUs" onClick={handleScroll}>
                  Productions
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="#Categories" onClick={handleScroll}>
                  Blog
                </Link>
              </motion.li>
            </ul>
            <div className="space-y-4">
              <motion.div
                role="button"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-standarYellow w-[48px] rounded-full"
              >
                <div className="flex w-[50px] items-center gap-1 rounded-full bg-standardGray/30 py-1 px-2">
                  <BsMoon className="text-white bg-standardBlack rounded-full p-1 h-5 w-5" />
                  <BsSun className="text-white h-4 w-4" />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button className="flex items-end gap-2 text-[14px] rounded-full border border-white text-white px-8 py-3">
                  Hire Us
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Header;
