import Image from 'next/image';
import {Doctor} from '@/types/institution/institution-detail';

interface Props {
  doctor: Doctor;
}
const DoctorCard: React.FC<Props> = ({ doctor }) => {

  return (
    <div className='w-72 mx-10 bg-white rounded-[12px] overflow-hidden drop-shadow-xl border- mt-5 relative md:w-84 lg:w-72 xl:w-64 2xl:w-64'>
      <div className="absolute top-4 left-28 w-20 h-20 rounded-full overflow-hidden border-2 border-white">
        <Image src={doctor?.photoUrl} alt="doctor image" width={80} height={80} className="object-cover" priority />
      </div>
      <h3 className="text-xl font-bold mx-8 mt-32 xl:text-lg 2xl:text-xl">{doctor?.fullName}</h3>
      <div className="border-b border-gray-300 my-1"></div>
      <p className="text-xl text-gray-600 p-5 mx-16">{doctor?.specialities[0]}</p>
    </div>
  );
};

export default DoctorCard;
