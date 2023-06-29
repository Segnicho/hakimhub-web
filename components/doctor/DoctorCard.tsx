import Image from 'next/image';
import Link from "next/link";
import { FilteredDoctors } from '@/types/institution/institution-detail';

interface Props {
  doctor: FilteredDoctors;
}
const DoctorCard: React.FC<Props> = ({ doctor }) => {
  
  return (
    <Link href={`/doctors/${doctor.id}`} className=''>
    <div className='w-72 mx-10 bg-white rounded-[12px] overflow-hidden drop-shadow-xl border-2 border-grey-200 mt-5 relative text-center place-content-center md:w-84 lg:w-72 xl:w-64 2xl:w-64'>
      <div className="absolute top-4 left-20 right-2 w-20 h-20 rounded-full overflow-hidden border-2 border-white">
        <Image src={doctor?.photoUrl} alt="doctor image" width={80} height={80} className="object-cover" priority />
      </div>
      <h3 className="text-xl font-bold mx-8 mt-32 xl:text-lg 2xl:text-xl">{doctor?.fullName}</h3>
      <div className="border-b border-gray-300 my-1"></div>
      <p className="text-xl text-primary p-5">{doctor?.specialities}</p>
    </div>
    </Link>
  );
};

export default DoctorCard;
