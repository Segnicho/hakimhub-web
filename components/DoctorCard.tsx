import Image from 'next/image';
import {Doctor} from './../types/Hospital';
interface Props {
  doctor: Doctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {

  return (
    <div className='w-72 mx-10 bg-white rounded-[12px] overflow-hidden drop-shadow-xl mt-5 relative'>
      <div className="absolute top-2 left-28 w-20 h-20 rounded-full overflow-hidden border-2 border-white">
        <Image src={doctor?.Photo.Url} alt="Logo of the Hospital" width={80} height={80} layout="responsive" className="object-cover" priority />
      </div>
      <h3 className="text-xl text-blue-500 font-bold mx-16 mt-24">{doctor?.FullName}</h3>
      <div className="border-b border-gray-300 my-1"></div>
      <p className="text-xl text-gray-600 p-5 mx-16">{doctor?.Specialities[0].Name}</p>
    </div>
  );
};

export default DoctorCard;
