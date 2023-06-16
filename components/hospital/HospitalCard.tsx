import Image from "next/image";
import ServicesCard from "@/components/commons/ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HospitalCard: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
  };
  const isopen = false;
  const numServices = 4; 
  const services = Array(numServices).fill().map((_, index) => ( <ServicesCard key={index} /> ));
  return (
    <div className="flex flex-wrap bg-card-bg rounded-lg m-3 shadow-lg">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg">
        <div>
          <Image
            src={"/imgs/hospital/background.png"}
            alt={"hospital"}
            width={500}
            height={200}
          />
        </div>
        <div className="flex justify-center mb-10">
          <Image
            src={"/imgs/hospital/logo.png"}
            alt={"logo"}
            width={100}
            height={160}
            className="rounded-full -m-10"
          />
        </div>
        <div className="flex flex-wrap m-2">
          <div className="w-1/2 hidden md:block">
            <div className="text-xl font-bold">
              <span className="text-primary font-extrabold text-2xl -mt-3">
                12
              </span>
              <span>Hour</span>
            </div>
            <div className="text-sm ">
              <span>8:00am - 8:00pm</span>
            </div>
          </div>
          <div className="w-1/2 pl-6 hidden md:block">
            <div>
              <div className=" text-xl font-bold">
                <span className="text-primary font-extrabold text-2xl">5</span>{" "}
                <span>Days</span>
              </div>
              <div className="text-sm">
                <span>Monday - Friday</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`text-lg font-bold flex flex-wrap justify-end mr-2 ${
            isopen ? "text-green-500" : "text-red-300"
          }`}
        >
          {isopen ? "OPEN" : "CLOSED"}
        </div>
      </div>
      <div className="pl-5 w-full md:w-2/3">
        <div className="font-extrabold text-3xl pb-2">
          <span>Tikur Anbesa</span>
          <span className="text-primary font-extrabold text-3xl"> Hospital</span>
        </div>
        <div className="text-sm pb-2 mb-2">
          <span>King George Street</span>
        </div>
        <div className=" text-xl font-bold pb-2 mb-2 hidden md:block">
          <span>Services</span>
        </div>

        <div className="hidden md:block pb-1">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index}>{service}</div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
