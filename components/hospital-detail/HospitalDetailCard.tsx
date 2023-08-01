import Image from 'next/image';

export interface HospitalCardProps {
  image?: string;
  name?: string;
  status?: string;
  logo?: string;
}

const HospitalDetailCard: React.FC<HospitalCardProps> = ({ image, name, status, logo }) => {
  const Institution = name?.split(" ");
  const LastInstitutionName = Institution?.pop();
  const FirtInstitutionName = Institution?.join(" ");

  return (
    <div className='drop-shadow shadow-md rounded-lg bg-white mt-10'>
      <div>
        {image && (
         <div className="w-full h-[250px] max-lg:h-[150px]">
         <div className="relative w-full h-full">
           <Image
             src={image}
             alt="Hospital Image"
             className="object-cover rounded-lg"
             fill
           />
         </div>
       </div>
        )}

        {logo && (
          <div className="flex justify-center -mt-[50px] mx-auto rounded-full relative w-[100px] h-[100px]">
          <Image
            src={logo}
            alt="Logo of the Hospital"
            className="rounded-full object-cover"
            fill
          />
        </div>
        )}
      </div>
      <div className='justify-center flex flex-wrap'>
      <div className="font-extrabold text-2xl p-2">
          <span> {FirtInstitutionName}</span>
          <span className="text-primary font-extrabold">
            {" "}
            {LastInstitutionName}
          </span>
        </div>
      </div>
      <div
        className={`text-lg font-bold flex flex-wrap justify-end mr-4 pb-4 mb-auto self-end ${
          status == "Open" ? "text-isopen-text" : "text-closed-text"
        }`}>
        {status == "Open" ? "OPEN" : "CLOSED"}
      </div>
    </div>
  );
};

export default HospitalDetailCard;

