import DoctorCard from './DoctorCard';
import { Doctor } from '../../types/hospital';

interface DoctorProps {
  doctors: Doctor[];
  name:string;
}

const DoctorsList: React.FC<DoctorProps> = ({doctors,name}) => {
  return (
    <div className='mx-6 my-6 bg-secondary-bg'>
      <div className='flex flex-row'>
        <h3 className='text-2xl font-bold mx10'>Doctors at <span>{name}</span></h3>
        <div className='flex flex-row ml-36'>
          <div className='relative'>
            <label htmlFor='speciality' className='text-md font-semi-bold text-primary'>
              Speciality
            </label>
            <select
              id='speciality'
              className='block w-32 mt-1 py-2 px-3 bg-white rounded-md  drop-shadow shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Cardiologist</option>
              <option value='Cardiologist'>Cardiologist</option>
              <option value='Dermatologist'>Dermatologist</option>
              <option value='Gynecologist'>Gynecologist</option>
              <option value='Pediatrician'>Pediatrician</option>
            </select>
          </div>
          <div className='relative ml-4'>
            <label htmlFor='university' className='text-md font-semi-bold text-primary'>
              Education
            </label>
            <select
              id='university'
              className='block w-48 mt-1 py-2 px-3 bg-white rounded-md  drop-shadow shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>Addis Ababa University</option>
              <option value='Addis Ababa University'>Addis Ababa University</option>
              <option value='Hawassa University'>Hawassa University</option>
              <option value='Mekelle University'>Mekelle University</option>
              <option value='Jimma University'>Jimma University</option>
              <option value='Bahir Dar University'>Bahir Dar University</option>
            </select>
          </div>
          <div className='relative ml-4'>
            <label htmlFor='experience' className='text-md font-semi-bold text-primary'>
              Experience
            </label>
            <select
              id='experience'
              className='block w-32 mt-1 py-2 px-3 bg-white rounded-md  drop-shadow shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            >
              <option value=''>0-2 years</option>
              <option value='0-5 years'>3-5 years</option>
              <option value='5-10 years'>6-8 years</option>
              <option value='10-15 years'>8-10 years</option>
              <option value='15+ years'>10+ years</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap mx-4 my-20'>
        {doctors.map((doctor,index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
