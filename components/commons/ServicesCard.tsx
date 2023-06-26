import Image from "next/image";
interface ServiceProps {
  service: string;
}
const ServicesCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg m-2 p-3 shadow-md lg:min-h-[120px] lg:min-w-[140px] md:min-h-[120px] md:min-w-[100px]">
      <div className="flex flex-wrap">
        <div className="w-1/2 mb-1">
          <Image
            src={"/imgs/hospital/plus.png"}
            alt={"cross icon"}
            width={30}
            height={30}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end">
          <Image
            src={"/imgs/hospital/check.png"}
            alt={"check"}
            width={30}
            height={30}
            className="justify-end"
          />
        </div>
      </div>
      <div className="flex flex-wrap font-bold lg:text-md md:text-sm">
        <span>{service}</span>
      </div>
    </div>
  );
};

export default ServicesCard;
