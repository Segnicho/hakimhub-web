import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DoctorsList, GalleryCard, ContactCard, HospitalDetailCard, Overview, Loading } from "@/components";
import { useGetHospitalByIdQuery } from '@/store/hospital/hospital-detail-api';
import Image from 'next/image';
import { doctorImg } from '@/public';

const HospitalDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data: hospital, isSuccess, isLoading, isError } = useGetHospitalByIdQuery(id);
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (router.query.tab === "doctors") {
      setActiveTab("doctors");
    } else if (router.query.tab === "gallery") {
      setActiveTab("gallery");
    } else {
      setActiveTab("overview");
    }
  }, [router.query.tab]);

  const handleTabClick = (tab: string) => {
    router.push(`/hospitals/${id}?tab=${tab}`);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobileOrTablet = () => {
    if (typeof window !== "undefined") {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return windowWidth < 640;
    }
    return false;
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center text-xl">
        <h3 className="text-2xl text-primary">Oops!</h3>
        <div className="text-black">
          An error occurred while fetching the hospital data.
        </div>
      </div>
    );
  }

  return (
    
      <div className='max-sm:flex-col sm:flex'>
      <div className="gap-3">
        <HospitalDetailCard
          image = {hospital?.value.bannerUrl}
          name = {hospital?.value.institutionName}
          status = {hospital?.value.status}
          logo = {hospital?.value.logoUrl}
        />
        <ContactCard
          website={hospital?.value.website}
          phoneNumber={hospital?.value.phoneNumber}
        />
      </div>
      <div className="mt-10 sm:row-span-3 sm:col-span-2 md:row-span-3 md:col-span-3 md:flex-row lg:row-span-3 lg:col-span-2 lg:flex-row">
        {/* Navigation */}
        <nav className="flex flex-wrap md:ml-6 bg-white rounded-lg text-gray-500 drop-shadow shadow-md mx-8 md:gap-x-24 lg:h-8 lg:gap-24">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
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
                        className="-mt-2"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 12H16V10H4V12ZM4 7H16V5H4V7ZM4 2H16V0H4V2Z"
                      />
                    )}
                  </svg>
                  <span
                    className={isMobileMenuOpen ? "hidden" : "text-black ml-4"}
                  >
                    Menu
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Tabs */}
          {isMobileOrTablet() && isMobileMenuOpen ? (
            <div className="flex flex-col items-start mx-2">
              <button
                onClick={() => {
                  handleTabClick("overview");
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'overview' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                  'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  handleTabClick("doctors");
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'doctors' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                  'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                }`}
              >
                Doctors
              </button>
              <button
                onClick={() => {
                  handleTabClick("gallery");
                  handleToggleMobileMenu();
                }}
                className={`${
                  activeTab === 'gallery' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                  'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                }`}
              >
                Gallery
              </button>
            </div>
          ) : (
            !isMobileOrTablet() && (
              <div className="flex flex-row sm:mx-10 sm:gap-16 items-center md:mx-16 ">
                <button
                  onClick={() => handleTabClick("overview")}
                  className={`${
                    activeTab === 'overview' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                    'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => handleTabClick("doctors")}
                  className={`${
                    activeTab === 'doctors' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                    'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                  }`}
                >
                  Doctors
                </button>
                <button
                  onClick={() => handleTabClick("gallery")}
                  className={`${
                    activeTab === 'gallery' ? 'active selectedTab hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold' :
                    'hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold'
                  }`}
                >
                  Gallery
                </button>
              </div>
            )
          )}
        </nav>

        <div className="mt-4">
          {activeTab === "overview" && (
            <div className="-z-10">
              <Overview
                about={hospital?.value.summary}
                services={hospital?.value.services}
                latitude={hospital?.value.address?.latitude}
                longitude={hospital?.value.address?.longitude}
              />
            </div>
          )}
        {activeTab === 'doctors' && (
        <>
          {isLoading && <Loading />}
          {!isError && hospital?.value.doctors && hospital?.value.doctors.length > 0 ? (
            <DoctorsList
              hospitalId={hospital?.value.id}
              name={hospital?.value.institutionName}
              allSpecialities={hospital?.value.allSpecialities}
              allEducationalInstitutions={hospital?.value.allEducationalInstitutions}
            />
          ) : (
            <div className="flex flex-row items-center my-30 mx-12 ml-44 mt-40 gap-1">
              <Image
                src={doctorImg}
                alt="There is no doctor"
                width={150}
                height={150}
                className="object-cover"
              />
              <div className="text-start text-gray-500 font-bold">
                <h3 className="text-5xl my-2">Oops!</h3>
                Seems like there is no doctor data available for this hospital at the moment.
              </div>
            </div>
          )}
        </>
        )}

          {activeTab === "gallery" && hospital?.value.photos && (
            <GalleryCard photos={hospital?.value.photos} />
          )}
        </div>
      </div>
    </div>
  );
};
     

export default HospitalDetailPage;
