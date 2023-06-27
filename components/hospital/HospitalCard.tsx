import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hospital from "@/types/institution/institution";
import NoServices from "../commons/NoService";
import { MdForward } from "react-icons/md";
import Link from "next/link";
import ServicesSlide from "../commons/ServicesSlide";
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${hours}:${minutes}`;
};
interface HospitalProps {
  hospital: Hospital;
  slideShow:number
}
const HospitalCard: React.FC<HospitalProps> = ({
  hospital: {
    logoUrl,
    bannerUrl,
    institutionName,
    address,
    services,
    id,
    institutionAvailability: { opening, closing, startDay, endDay },
  },slideShow
}) => {
  const openingTime = opening;
  const closingTime = closing;
  const currentTime = getCurrentTime();
  const isOpen = currentTime >= openingTime && currentTime <= closingTime;

  const Institution = institutionName.split(" ");
  const LastInstitutionName = Institution.pop();
  const FirtInstitutionName = Institution.join(" ");

  return (
    <div className="flex flex-wrap bg-card-bg rounded-lg m-3 shadow-lg ">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg">
        <div className="w-full h-[150px]">
          <div className="relative w-full h-full">
            <Image
              src={bannerUrl}
              alt="hospital"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex justify-center -mt-[50px] mx-auto rounded-full relative w-[100px] h-[100px]">
          <Image
            src={logoUrl}
            alt="logo"
            className="rounded-full object-cover "
            fill
          />
        </div>
        <div className="flex flex-wrap m-2">
          <div className="w-1/2 md:block">
            <div className="text-xl font-bold">
              <span className="text-primary font-extrabold text-2xl -mt-3">
                24
              </span>
              <span> Hour</span>
            </div>
            <div className="text-sm text-primary-text font-light">
              <span>
                {opening} : {closing}
              </span>
            </div>
          </div>
          <div className="w-1/2 pl-6 md:block">
            <div>
              <div className=" text-xl font-bold">
                <span className="text-primary font-extrabold text-2xl">5</span>{" "}
                <span>Days</span>
              </div>
              <div className="text-sm">
                <span>
                  {startDay} - {endDay}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`text-lg font-bold flex flex-wrap justify-end mr-2 mb-auto self-end ${
            isOpen ? "text-isopen-text" : "text-closed-text"
          }`}
        >
          {isOpen ? "OPEN" : "CLOSED"}
        </div>
      </div>
      <div className="pl-5 w-full md:w-2/3 p-2">
        <div className="font-extrabold text-3xl pb-2">
          <span> {FirtInstitutionName}</span>
          <span className="text-primary font-extrabold text-3xl">
            {" "}
            {LastInstitutionName}
          </span>
        </div>
        <div className="text-md pb-6 font-light text-primary-text">
          <span>{address.summary}</span>
        </div>
        <div className="text-xl font-bold hidden md:block">
          <span>Services</span>
        </div>

        <div className="hidden md:block pt-6">
          {services.length > 0 ? (
            <ServicesSlide slideShow={slideShow} services={services} />
          ) : (
            <NoServices />
          )}
        </div>
        <Link href={`/hospitals/${id}`}>
        <div className="border-2 border-primary flex flex-wrap w-1/5 justify-center p-1 rounded-lg">
          <div className="flex flex-wrap text-primary justify-center w-4/5">
            <span>Show more</span>
          </div>
          <div className="flex flex-wrap w-1/5 justify-end">
            <MdForward className="text-primary text-xl cursor-pointer flex flex-wrap self-center" />
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
