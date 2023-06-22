import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero, Search, Service } from "@/components";
import { services } from "@/data/services";
import { phone } from "@/public";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col px-10 ${inter.className}`}>
      <Hero />
      <Search />
      <div className="mt-10">
        <h3 className="font-bold text-center text-primary-text text-[40px]">
          Services We Provide
        </h3>
        <div className="flex justify-between flex-wrap px-8 max-sm:justify-center">
          {services.map((service, index) => (
            <Service
              key={index}
              description={service.description}
              image={service.image}
              service={service.service}
            />
          ))}
        </div>
        <div className="flex mx-auto">
          <div className="w-2/3 max-sm:justify-center">
            <h1 className="font-bold text-[40px] text-primary-text text-center my-3 mb-5 ">
              What is Hakimhub
            </h1>
            <div className="leading-1 tracking-wide w-[80%] mx-auto">
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
            <h2 className="text-center">Android</h2>
            <Image
              src={phone}
              alt="Phone"
              className="object-contain h-[500px] "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
