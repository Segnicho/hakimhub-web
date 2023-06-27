import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero, Loading, Search, Service } from "@/components";
import { hakimhub, services } from "@/data/home";
import { phone } from "@/public";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import HospitalsList from "@/components/hospital/HospitalsList";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const filters = {
    openStatus: false,
    operationYears: 0,
    services: [],
    name: "",
  };
  const { data: hospitals, isLoading, isError } = useGetHospitalsQuery(filters);
  return (
    <main
      className={`flex min-h-screen flex-col px-20 mx-auto ${inter.className}`}
    >
      <Hero />
      <Search />
      <div className="mt-10">
        <h3 className="font-bold text-center text-primary-text text-[40px]">
          Services We Provide
        </h3>
        <div className="flex justify-between flex-wrap max-sm:justify-center">
          {services.map((service, index) => (
            <Service
              key={index}
              description={service.description}
              image={service.image}
              service={service.service}
            />
          ))}
        </div>
        <div className="flex">
          <div className="w-2/3 max-sm:justify-center">
            <h1
              className="font-bold text-[40px] text-primary-text text-center my-3 mb-5 mx-auto "
              id="about"
            >
              What is Hakimhub
            </h1>
            <div className="leading-1 tracking-wide w-[80%]">
              HakimHub is a professional website designed to empower users in
              understanding their health concerns.
              <span className="max-sm:hidden">
                With our user-friendly platform, individuals can input their
                symptoms, and our advanced system assists in identifying
                potential diseases while guiding them towards appropriate
                specialists. By leveraging cutting-edge technology and medical
                expertise, we provide users with valuable insights into their
                health issues, helping them make informed decisions about their
                well-being. With HakimHub, users can find answers to their
                symptoms and receive personalized recommendations for seeking
                further medical care.
              </span>
            </div>
          </div>
          <div className="w-1/3 max-md:hidden">
            <Image
              src={phone}
              alt="Phone"
              className="object-contain h-[500px] "
            />
          </div>
        </div>
        <div className="flex space-x-3 flex-wrap my-10 max-md:flex-col">
          <div className="md:flex-1">
            <h3 className="text-primary text-[40px] font-semibold text-center">
              Mission
            </h3>
            <p className="px-5">{hakimhub.mission}</p>
          </div>
          <div className="md:flex-1">
            <h3 className="text-primary text-[40px] font-semibold text-center">
              Vision
            </h3>
            <p className="px-5">{hakimhub.vision}</p>
          </div>
        </div>
        <div>
          <h3 className=" text-[40px] font-semibold text-center pb-3">
            Our <span className="text-primary">Hospitals</span>{" "}
          </h3>
          {isLoading && <Loading />}
          {hospitals && (
            <HospitalsList hospitals={hospitals.value.slice(0, 2)} />
          )}
        </div>
      </div>
    </main>
  );
}
