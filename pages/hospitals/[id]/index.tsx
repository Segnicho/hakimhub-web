<<<<<<< HEAD
import { useRouter } from "next/router";
import {
  DoctorsList,
  GalleryCard,
  ContactCard,
  HospitalCard,
  Overview,
} from "@/components";

const HospitalDetailPage = () => {
  const router = useRouter();

  const handleOverviewClick = () => {
    router.push("/hospitals/[id]", `/hospitals/${router.query.id}`);
  };

  const handleDoctorsClick = () => {
    router.push(
      "/hospitals/[id]/doctors",
      `/hospitals/${router.query.id}/doctors`
    );
  };

  const handleGalleryClick = () => {
    router.push(
      "/hospitals/[id]/gallery",
      `/hospitals/${router.query.id}/gallery`
    );
  };

  return (
    <div className="grid grid-cols-3 grid-rows-1 bg-secondary-bg">
      <div className="flex-row w-30">
        <HospitalCard />
        <div className="my-10">
          <ContactCard />
        </div>
      </div>
      <div className="row-span-3 col-span-2 flex-row mt-20">
        <nav className="grid grid-rows-1 grid-cols-3 w-full h-10 bg-white rounded-lg drop-shadow-md r-10 text-gray-500">
          <button
            onClick={handleOverviewClick}
            className="hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold"
          >
            Overview
          </button>
          <button
            onClick={handleDoctorsClick}
            className="hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold"
          >
            Doctors
          </button>
          <button
            onClick={handleGalleryClick}
            className="hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold"
          >
            Gallery
          </button>
        </nav>

        {router.pathname === "/hospitals/[id]" && <Overview />}
        {router.pathname === "/hospitals/[id]/doctors" && <DoctorsList />}
        {router.pathname === "/hospitals/[id]/gallery" && <GalleryCard />}
      </div>
    </div>
  );
};

export default HospitalDetailPage;
=======
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DoctorsList, GalleryCard, ContactCard, HospitalDetailCard, Loading } from '../../../components/index';
import { useGetHospitalByIdQuery } from '../../../store/hospital/hospital-detail-api';

const HospitalDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data:hospital, isSuccess, isLoading, isError, error } = useGetHospitalByIdQuery(id);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (router.query.tab === 'doctors') {
      setActiveTab('doctors');
    } else if (router.query.tab === 'gallery') {
      setActiveTab('gallery');
    } else {
      setActiveTab('overview');
    }
  }, [router.query.tab]);

  const handleTabClick = (tab: string) => {
    router.push(`/hospitals/${id}?tab=${tab}`);
  };

  if (isLoading) {
  }

  if (isSuccess) {
    return (
      <div className="grid grid-cols-3 grid-rows-1 bg-secondary-bg">
        <div className="w-30 sticky top-14">
          <HospitalDetailCard image={hospital?.value.bannerUrl} logo={hospital?.value.logoUrl} status={hospital?.value.status} name={hospital?.value.institutionName} />
            <ContactCard website={hospital?.value.website} phoneNumber={hospital?.value.phoneNumber} />
        
        </div>
        <div className="row-span-3 col-span-2 flex-row mt-10 mr-10">
          <nav className="grid grid-rows-1 grid-cols-3 w-full h-10 bg-white rounded-lg drop-shadow-md r-10 text-gray-500">
            <button onClick={() => handleTabClick('overview')} className={activeTab === 'overview' ? 'active' : ''}>
              Overview
            </button>
            <button onClick={() => handleTabClick('doctors')} className={activeTab === 'doctors' ? 'active' : ''}>
              Doctors
            </button>
            <button onClick={() => handleTabClick('gallery')} className={activeTab === 'gallery' ? 'active' : ''}>
              Gallery
            </button>
          </nav>

          {activeTab === 'overview' && (
            <div>
              <h2>overview</h2>
            </div>
          )}
          {activeTab === 'doctors' && hospital?.value.doctors && (
            <DoctorsList doctors={hospital?.value.doctors} name={hospital?.value.institutionName}/>
          )}
          {activeTab === 'gallery' && hospital?.value.photos && (
            <GalleryCard photos={hospital?.value.photos} />
          )}
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {"Unknown Error"}</div>; // Show an error message if there's an error
  }
};

export default HospitalDetailPage
>>>>>>> bbc53e3 (arrange folder structure)
