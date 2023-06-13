import Image from "next/image";

const ServicesCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg mr-4 p-2 -mb-3">
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <Image
            src={"/image/plus.png"}
            alt={""}
            width={30}
            height={30}
            className=""
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end">
          <Image
            src={"/image/check.png"}
            alt={""}
            width={30}
            height={30}
            className="justify-end"
          />
        </div>
      </div>
      <div className="flex flex-wrap font-bold text-md ">
       General and specialty surgical services.
      </div>
    </div>
  );
};

export default ServicesCard;
