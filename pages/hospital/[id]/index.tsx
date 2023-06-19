import { useRouter } from 'next/router'
import {DoctorsList,GalleryCard,ContactCard,HospitalCard} from '../../../components/index'

const HospitalDetailPage = () => {
  const router = useRouter();

  const handleOverviewClick = () => {
    router.push('/hospital/[id]', `/hospital/${router.query.id}`);
  };

  const handleDoctorsClick = () => {
    router.push('/hospital/[id]/doctors', `/hospital/${router.query.id}/doctors`);
  };

  const handleGalleryClick = () => {
    router.push('/hospital/[id]/gallery', `/hospital/${router.query.id}/gallery`);
  };

  return (
    <div className='grid grid-cols-3 grid-rows-1 bg-secondary-bg'>
      <div className="flex-row w-30">
        <HospitalCard />
        <div className="my-10">
          <ContactCard />
        </div>
      </div>
      <div className='row-span-3 col-span-2 flex-row mt-20'>
        <nav className='grid grid-rows-1 grid-cols-3 w-full h-10 bg-white rounded-lg drop-shadow-md r-10 text-gray-500'>
          <button onClick={handleOverviewClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Overview</button>
          <button onClick={handleDoctorsClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Doctors</button>
          <button onClick={handleGalleryClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Gallery</button>
        </nav>

        {/* To be added by Segni */}
        {/* {router.pathname === '/hospital/[id]' && <OverviewComponent />} */}
        {router.pathname === '/hospital/[id]/doctors' && <DoctorsList />}
        {router.pathname === '/hospital/[id]/gallery' && <GalleryCard />}
      </div>
    </div>
  );
};


export default HospitalDetailPage;

