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
import  Image  from 'next/image';
const HospitalDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: hospital, isSuccess, isLoading, isError, error } = useGetHospitalByIdQuery(id);
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobileOrTablet = () => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return windowWidth < 940; // Adjust the breakpoint as per your requirements
    }
    return false; // Return a default value if running in a non-browser environment
  };

  return (
    <div className="sm:flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 grid grid-cols-3 grid-rows-1 bg-primary-bg">
      <div className="w-30">
        <HospitalDetailCard image={hospital?.value.bannerUrl} logo={hospital?.value.logoUrl} status={hospital?.value.status} name={hospital?.value.institutionName} />
        <ContactCard website={hospital?.value.website} phoneNumber={hospital?.value.phoneNumber} />
      </div>

      <div className="mt-10 mx-20 lg:row-span-3 lg:col-span-2 lg:flex-row lg:mr-10">
        <nav className="flex flex-wrap w-full bg-white rounded-lg text-gray-500 drop-shadow shadow-md lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:w-full lg:h-10 lg:r-20">
          <div className="flex items-center justify-between">
            <div>
              {isMobileOrTablet() ? (
                <button
                  className="text-gray-500 flex flex-row"
                  onClick={handleToggleMobileMenu}
                >                 
                  <svg
                    className={`mt-2 w-6 h-6 cursor-pointer ${
                      isMobileMenuOpen ? "-mt-8" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {isMobileMenuOpen ? (
                     
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 14H4V12H16V14ZM16 9H4V7H16V9ZM16 4H4V2H16V4Z"
                        className='-mt-2'
                      />
                    
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 12H16V10H4V12ZM4 7H16V5H4V7ZM4 2H16V0H4V2Z"
                      />
                    )}
                  </svg>
                  <span className={isMobileMenuOpen ? 'hidden' : 'text-black ml-4'}>Menu</span>
                </button>
              ) : (
                ''
              )}
            </div>
          
          </div>
          
          {isMobileOrTablet() && isMobileMenuOpen ? (
            <div className="flex flex-col items-start mx-2">
              <button
                onClick={() => {
                  handleTabClick('overview');
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'overview' ? 'active' : ''
                } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  handleTabClick('doctors');
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'doctors' ? 'active' : ''
                } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
              >
                Doctors
              </button>
              <button
                onClick={() => {
                  handleTabClick('gallery');
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'gallery' ? 'active' : ''
                } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
              >
                Gallery
              </button>
              
            </div>
          ) : (
            !isMobileOrTablet() && (
              <div className="lg:flex lg:flex-row lg:gap-40 lg:-ml-36">

                <button
                  onClick={() => handleTabClick('overview')}
                  className={`${
                    activeTab === 'overview' ? 'active' : ''
                  } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
                >
                  Overview
                </button>
                <button
                  onClick={() => handleTabClick('doctors')}
                  className={`${
                    activeTab === 'doctors' ? 'active' : ''
                  } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
                >
                  Doctors
                </button>
                <button
                  onClick={() => handleTabClick('gallery')}
                  className={`${
                    activeTab === 'gallery' ? 'active' : ''
                  } hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold`}
                >
                  Gallery
                </button>
              </div>
            )
          )}
        </nav>

        <div className="mt-4">
          {activeTab === 'overview' && (
            <div>
              <Overview />
            </div>
          )}
          {activeTab === 'overview' && (
            <div>
              <h2>Overview</h2>
            </div>
          )}
          {activeTab === 'doctors' && (
            <>
              {isError && (
                <div className='text-center text-xl'>
                  <h3 className='text-2xl text-primary'> Oops!</h3>
                <div className="text-black">
                 An error occurred while fetching the hospital data.
                </div>
                </div>
              )}
              {!isError && hospital?.value.doctors && hospital?.value.doctors.length > 0 ? (
                <DoctorsList
                  doctors={hospital?.value.doctors}
                  name={hospital?.value.institutionName}
                />
              ) : (
                <div className='flex flex-row items-center my-30 mx-12 ml-44 mt-40 gap-1'>
                    <Image src='/img/doctor/doctor.jpg' alt="There is no doctor" width={150} height={150} className="object-cover"/>
                <div className='text-start text-gray-500 font-bold'>
                  <h3 className='text-5xl my-2'>Oops!</h3>
                  Seems like there are no doctors data for this hospital at the moment.
                </div>
                </div>
              
              )}
            </>
          )}
          {activeTab === 'gallery' && hospital?.value.photos && (
            <GalleryCard photos={hospital?.value.photos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailPage;
