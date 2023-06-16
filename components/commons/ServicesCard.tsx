import Image from "next/image";

const ServicesCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg m-4 p-4 shadow-md">
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
      <div className="flex flex-wrap font-bold text-md p-2 pb-0">
        <span>General and specialty surgical services.</span>
      </div>
    </div>
  );
};

export default ServicesCard;
