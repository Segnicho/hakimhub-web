import Image from 'next/image';
import Link from "next/link";
import { FilteredDoctors } from '@/types/institution/institution-detail';

interface Props {
  doctor: FilteredDoctors;
}
const DoctorCard: React.FC<Props> = ({ doctor }) => {
  
  return (
    (<Link href={`/doctors/${doctor.id}`}>
      <div className='flex flex-col justify-start items-center mx-2 h-[150px] bg-white rounded-[12px] drop-shadow-xl border-2 border-grey-200 mb-2 mt-14 relative text-center'>
        <div className="absolute -mt-10 w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <Image src={doctor?.photoUrl} alt="doctor image" width={80} height={80} className="object-cover" priority />
        </div>
        <div className="text-sm font-bold mx-2 md:mx-6 mt-12 xl:text-lg 2xl:text-xl">
          <h3 >{doctor?.fullName}</h3>
        </div>
        <p className="text-sm text-primary px-2">{doctor?.specialities}</p>
      </div>
    </Link>)
  );
};

export default DoctorCard;
