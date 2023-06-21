import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer:React.FC = () => {
  return (
    <div className="py-5 flex justify-between px-10  mr-10 bg-slate-50">
      <div>
        <span className="mr-8">Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
      <div className="flex gap-8 text-primary">
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
