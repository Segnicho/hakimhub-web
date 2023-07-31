import { Hero, Search } from "@/components";
import Services from "@/components/home/Services";
import AboutUs from "@/components/home/AboutUs";
import Hospitals from "@/components/home/Hospitals";
import { hakimhub } from "@/data/home";
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col mt-20 px-8 md:px-20`}>
      <Hero />
      <Search />
      <div className="flex flex-col gap-y-16 mt-28">
        <Services />
        <AboutUs />
        <div
          data-testid="mission-vision"
          className="flex space-x-3 flex-wrap my-10 max-md:flex-col"
        >
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
        <Hospitals />
      </div>
    </main>
  );
}
