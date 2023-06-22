import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  DoctorsList,
  GalleryCard,
  ContactCard,
  HospitalDetailCard,
  Overview,
} from "@/components";
import { useGetHospitalByIdQuery } from '../../../store/hospital/hospital-detail-api';

const HospitalDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: hospital, isSuccess, isLoading, isError, error } = useGetHospitalByIdQuery(id);
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
    // Render loading state
  }

  if (isSuccess) {
    return (
      <div className="grid grid-cols-3 grid-rows-1 bg-primary-bg">
        <div className="w-30">
          <HospitalDetailCard
            image={hospital?.value.bannerUrl}
            logo={hospital?.value.logoUrl}
            status={hospital?.value.status}
            name={hospital?.value.institutionName}
          />
          <ContactCard
            website={hospital?.value.website}
            phoneNumber={hospital?.value.phoneNumber}
          />
        </div>
        <div className="row-span-3 col-span-2 flex-row mt-10 mr-10">
          <nav className="grid grid-rows-1 grid-cols-3 w-full h-10 bg-white rounded-lg drop-shadow-md r-10 text-gray-500">
            <button
              onClick={() => handleTabClick('overview')}
              className={`${
                activeTab === 'overview' ? 'active' : ''
              } hover:text-primary hover:border-b-2 hover:border-primary hover:mx-2`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick('doctors')}
              className={`${
                activeTab === 'doctors' ? 'active' : ''
              } hover:text-primary hover:border-b-2 hover:border-primary hover:mx-2`}
            >
              Doctors
            </button>
            <button
              onClick={() => handleTabClick('gallery')}
              className={`${
                activeTab === 'gallery' ? 'active' : ''
              } hover:text-primary hover:border-b-2 hover:border-primary hover:mx-2`}
            >
              Gallery
            </button>
          </nav>

          {activeTab === 'overview' && (
            <div>
              <Overview />
            </div>
          )}
          {activeTab === 'doctors' && hospital?.value.doctors && (
            <DoctorsList
              doctors={hospital?.value.doctors}
              name={hospital?.value.institutionName}
            />
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

export default HospitalDetailPage;
