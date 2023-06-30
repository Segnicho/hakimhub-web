import Image from 'next/image';

interface HospitalCardProps {
  image?: string;
  name?: string;
  status?: boolean;
  logo?: string;
}

const HospitalDetailCard: React.FC<HospitalCardProps> = ({ image, name, status, logo }) => {
  return (
    <div className='flex flex-col place-content-center overflow-hidden drop-shadow shadow-xl rounded-[12px] bg-white mx-4 mt-10 sm:w-[200px] md:w-[250px] md:h-[340px] lg:w-[250px] lg:h-[300px]'>
      <div className="flex flex-col overflow-hidden justify-end items-center">
        {image && (
          <Image src={image} alt="Hospital Image" width={400} height={60} className="object-cover w-full" />
        )}

        {logo && (
          <div className="absolute -mb-10 w-30 h-20 rounded-full overflow-hidden border-4 border-white">
            <Image src={logo} alt="Logo of the Hospital" width={80} height={80} className="object-cover h-full drop-shadow" />
          </div> 
        )}
      </div>
      <div className="my-12">
        <h3 className="text-xl text-primary font-bold mx-6 text-center">{name}</h3>
        </div>
        <div
        className={`text-lg font-bold flex flex-wrap justify-end mr-4 pb-4 mb-auto self-end ${
          status === true ? "text-isopen-text" : "text-closed-text"
        }`} >
       {status === false ? "OPEN" : "CLOSED"}
       </div>
    </div>
  );
};

export default HospitalDetailCard;

