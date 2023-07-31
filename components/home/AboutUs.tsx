import React from "react";
import { phone } from "@/public";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div data-testid="about-us" className="flex flex-row">
      <div className="flex flex-col w-2/3 justify-center gap-6">
        <h1
          className="font-bold text-[40px] text-primary-text text-center w-[80%] "
          id="about"
        >
          What is Hakimhub?
        </h1>
        <div className="leading-1 tracking-wide w-[80%]">
          HakimHub is a professional website designed to empower users in
          understanding their health concerns.
          <span className="max-sm:hidden">
            With our user-friendly platform, individuals can input their
            symptoms, and our advanced system assists in identifying potential
            diseases while guiding them towards appropriate specialists. By
            leveraging cutting-edge technology and medical expertise, we provide
            users with valuable insights into their health issues, helping them
            make informed decisions about their well-being. With HakimHub, users
            can find answers to their symptoms and receive personalized
            recommendations for seeking further medical care.
          </span>
        </div>
      </div>
      <div className="w-1/3 max-md:hidden">
        <Image src={phone} alt="Phone" className="object-contain h-[550px] " />
      </div>
    </div>
  );
};

export default AboutUs;
