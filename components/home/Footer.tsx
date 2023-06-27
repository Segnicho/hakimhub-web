import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer:React.FC = () => {
  return (
    <div className="py-5 flex justify-between px-10  mr-10 bg-slate-50">
      <div className="flex">
        <span className="md:mr-8 mr-4">Privacy <span className="max-sm:hidden">Policy</span></span>
        <span>Terms <span className="max-sm:hidden">of Use</span></span>
      </div>
      <div className="flex gap-3 sm:gap-8 text-primary">
        <Link href="/">
          <BsFacebook />
        </Link>
        <Link href="/">
          <BsLinkedin />
        </Link>
        <Link href="/">
          <BsInstagram />
        </Link>
        <Link href="/">
          <BsTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
