import React from "react";

const Footer = () => {
  return (
    <section id="Footer" className="container mx-auto space-y-4 px-4 pb-4">
      <hr className="bg-standardGray" />
      <div className="text-[14px] flex flex-col md:flex-row gap-4">
        <div className="text-white flex-1">
          &copy; 2023 BR. MODELS All right reserved.
        </div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </section>
  );
};

export default Footer;
