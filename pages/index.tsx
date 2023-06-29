import { Inter } from "next/font/google";
import { Hero, Search } from "@/components";
import Services from "@/components/home/Services";
import AboutUs from "@/components/home/AboutUs";
import VisionMission from "@/components/home/VisionMission";
import Hospitals from "@/components/home/Hospitals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col mt-28 px-8 md:px-20 ${inter.className}`}
    >
      <Hero />
      <Search />
      <div className="flex flex-col gap-y-16 mt-28">
        <Services />
        <AboutUs />
        <VisionMission />
        <Hospitals />
      </div>
    </main>
  );
}
