import { check, plus } from "@/public";
import Image from "next/image";
interface ServiceProps {
  service: string;
}

const ServicesCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg m-2 p-3 shadow-md box-border h-[100px] p-4">
      <div className="flex flex-wrap h-[20px]">
        <div className="w-1/2 mb-1">
          <Image src={plus} alt={"cross icon"} width={30} height={30} />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end">
          <Image
            src={check}
            alt={"check"}
            width={30}
            height={30}
            className="justify-end"
          />
        </div>
      </div>
      <div className="flex flex-wrap font-bold lg:text-md md:text-sm items-center h-[65px]">
        {service.length > 15 ? (
          <span className="flex flex-wrap self-center">{service.slice(0, 15)}{"..."}</span>
        ) : (<span className="flex flex-wrap self-center">{service}</span>)}
      </div>
    </div>
  );
};

export default ServicesCard;
