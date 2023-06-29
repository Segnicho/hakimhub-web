import { appstore, cross, googleplay, googlestore } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="bg-slate-50 mx-auto flex flex-wrap">
      <div className="w-3/4">
      <div className="grid pl-10 bg-slate-50 grid-cols-12 max-sm:flex max-sm:flex-col">
        <div className="col-span-5">
          <div className="flex">
            <Image src={cross} alt="cross" />{" "}
            <span className="items-center font-semibold text-[35px] ml-1">
              Hakim<span className="text-primary">Hub</span>
            </span>
          </div>
          <div className="text-primary pt-3">
            All rights reserved by the codematics 2023
          </div>
        </div>
        <div className="col-span-7 flex flex-col space-y-3">
          <div className="flex flex-col text-center max-sm:hidden">
            <span className="font-bold text-[35px]">
              Health <span className="text-primary"> Care</span>
            </span>
            <span>Options More accessible</span>
          </div>
          <div className="justify-center flex gap-3 max-sm:justify-start">
            <Image src={googleplay} alt="google play" />
            <Image src={appstore} alt="google play" className="max-md:hidden"/>
          </div>
        </div>
      </div>
      <div className=" flex justify-between  mr-10 bg-slate-50 mx-auto">
        <div className="flex">
          <span className="md:mr-8 mr-4">
            Privacy <span className="max-sm:hidden">Policy</span>
          </span>
          <span>
            Terms <span className="max-sm:hidden">of Use</span>
          </span>
        </div>
        <div className="flex gap-3 sm:gap-8 text-primary p-2 pr-10">
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
      </div>
    </div>
  );
};

export default Footer;
