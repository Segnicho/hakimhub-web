import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hospital from "@/types/institution/institution";
import NoServices from "../commons/NoService";
import { MdForward } from "react-icons/md";
import Link from "next/link";
import ServicesSlide from "../commons/ServicesSlide";

interface HospitalProps {
  hospital: Hospital;
  slideShow: number;
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
    status,
  },
  slideShow,
}) => {
  const Institution = institutionName.split(" ");
  const LastInstitutionName = Institution.pop();
  const FirtInstitutionName = Institution.join(" ");

  return (
    <div className="flex flex-wrap bg-card-bg rounded-lg shadow-lg ">
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
          <div className="w-1/2 md:block justify-center">
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
          <div className="w-1/2 md:block pr-4">
            <div>
              <div className="text-xl font-bold">
                <div className="flex justify-end">
                <span className="text-primary font-extrabold text-2xl pr-1">{'5  '}</span>
                <span className="">Days</span>
                </div>
              </div>
              <div className="text-sm text-primary-text font-light">
                <span className="flex flex-wrap justify-end">
                  {startDay} - {endDay}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`text-lg font-bold flex flex-wrap justify-end mr-2 mb-auto self-end ${
            status == "Open" ? "text-isopen-text" : "text-closed-text"
          }`}
        >
          {status == "Open" ? "OPEN" : "CLOSED"}
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
            <div>
              <ServicesSlide slideShow={slideShow} services={services} />
              <Link href={`/hospitals/${id}`}>
                <div className="flex flex-wrap text-primary justify-start font-bold hover:text-blue-600">
                  <span>{"Show more"}</span>
                </div>
              </Link>
            </div>
          ) : (
            <NoServices id={id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
