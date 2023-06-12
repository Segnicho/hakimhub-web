import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="sticky bottom-0 flex justify-between px-10 pt-2 mr-10 bg-slate-50">
      <div>
        <span className="mr-8">Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
      <div className="flex gap-8 text-[#68A4F9]">
        <BsFacebook />
        <BsLinkedin />
        <BsInstagram />
        <BsTwitter />
      </div>
    </div>
  );
};

export default Footer;
