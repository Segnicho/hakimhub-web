import Image from 'next/image';
import { doctorImg } from '@/public';

const NoFilteredDoctors = () => {
  return (
    <div className="flex flex-row items-center my-8 mx-12 ml-44 gap-1">
      <Image
        src={doctorImg}
        alt="There is no doctor"
        width={150}
        height={150}
        className="object-cover"
      />
      <div className="text-start text-gray-500 font-bold">
        <h3 className="text-5xl my-2">Oops!</h3>
        Seems like there is no doctor data available for this at the moment.
      </div>
    </div>
  );
};

export default NoFilteredDoctors;
