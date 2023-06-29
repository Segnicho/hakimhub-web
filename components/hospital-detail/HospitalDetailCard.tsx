import Image from 'next/image';

interface HospitalCardProps {
  image?: string;
  name?: string;
  status?: boolean;
  logo?: string;
}

const HospitalDetailCard: React.FC<HospitalCardProps> = ({ image, name, status, logo }) => {
  return (
    <div className="sm:w-[400px] sm:mx-28 lg:w-[300px] lg:mx-16 xl:w-[350px] xl:mx-16 2xl:w-[400px] 2xl:mx-16 w-sm mx-10 bg-white rounded-[12px] overflow-hidden drop-shadow shadow-xl my-10 sm:place-content-center md:place-content-center">
      <div className="flex flex-col overflow-hidden ">
        {image && (
          <Image src={image} alt="Hospital Image" width={400} height={400} className="object-cover" />
        )}

        {logo && (
          <div className="absolute top-1/3 left-32 w-30 h-20 rounded-full overflow-hidden border-2 border-white">
            <Image src={logo} alt="Logo of the Hospital" width={80} height={80} className="object-cover h-full drop-shadow" />
          </div> 
        )}
      </div>
      <div className="my-20">
        <h3 className="text-3xl text-primary font-bold mx-6 text-center">{name}</h3>
        <p className="text-2xl text-gray-600 p-5 mx-28">{status}</p>
        <div className="border-b border-gray-300 my-1"></div>
      </div>
    </div>
  );
};

export default HospitalDetailCard;