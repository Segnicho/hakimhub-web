import Image from 'next/image';

const HospitalCard = () => {
  return (
    <div className="w-sm mx-10 bg-white rounded-[12px] overflow-hidden drop-shadow shadow-xl my-10 relative">
      <div className="flex flex-col overflow-hidden">
        <Image src="/img/hospital/tikurAnbessa.jpg" alt="Hospital Image" width={120} height={120} layout="responsive" className="object-cover" />

        <div className="absolute top-36 left-36 w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <Image src="/img/logo/tikurAnbessa.jpg" alt="Logo of the Hospital" width={80} height={80} layout="responsive" className="object-cover" />
        </div>
      </div>
      <div className="my-20">
        <h3 className="text-3xl text-blue-500 font-bold mx-16">Tikur Ambessa</h3>
        <p className="text-2xl text-gray-600 p-5 mx-28">Open</p>
        <div className="border-b border-gray-300 my-1"></div>
      </div>
    </div>
  );
};

export default HospitalCard;
