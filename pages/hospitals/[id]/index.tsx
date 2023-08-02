import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { DoctorsList, GalleryCard, ContactCard, HospitalDetailCard, Overview, Loading } from "@/components";
import { useGetHospitalByIdQuery } from '@/store/features/hospital/hospital-detail-api';
import ErrorCard from '@/components/commons/ErrorCard';
import NoDoctors from '@/components/doctor/NoDoctors';
import { CgMenuLeft } from 'react-icons/cg';

const HospitalDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data: hospital, isSuccess, isLoading, isError } = useGetHospitalByIdQuery(id);
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    if (router.query.tab === "doctors") {
      setActiveTab("doctors");
    } else if (router.query.tab === "gallery") {
      setActiveTab("gallery");
    } else {
      setActiveTab("overview");
    }
  }, [router.query.tab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    router.push(`/hospitals/${id}?tab=${tab}`);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorCard />;
  }

  if (isSuccess) {
    return (
      <div
        data-testid="hospital-detail-page"
        className={`max-sm:${
          isMobileOrTablet ? "flex-col" : "flex"
        } sm:flex min-h-screen`}
      >
        <div className="w-1/3 px-4 pb-4 max-md:w-full">
          <div className="w-full">
            <HospitalDetailCard
              image={hospital?.value.bannerUrl}
              name={hospital?.value.institutionName}
              status={hospital?.value.status}
              logo={hospital?.value.logoUrl}
            />
          </div>
          <div className="w-full mt-2">
            <ContactCard
              website={hospital?.value.website}
              phoneNumber={hospital?.value.phoneNumber}
            />
          </div>
        </div>
        <div
          className={`mt-10 ${
            activeTab === "overview" && !isMobileOrTablet ? "w-3/4" : "w-full"
          }`}
        >
          {/* Navigation */}
          <nav className="flex flex-row bg-white rounded-lg text-gray-500 drop-shadow shadow-md mx-8 lg:gap-24 h-8 xl:gap-x-56 ">
            <div className="flex items-center justify-between">
              {/* Mobile Menu */}
              <div>
                {isMobileOrTablet ? (
                  <button
                    className="text-black-500 flex flex-col"
                    onClick={handleToggleMobileMenu}
                  >
                    <CgMenuLeft
                      className={`ml-2 w-6 h-6 cursor-pointer ${
                        isMobileMenuOpen ? "" : "-mb-6"
                      }`}
                    />
                    <span
                      className={
                        isMobileMenuOpen ? "hidden" : "text-grey ml-10"
                      }
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
            {isMobileOrTablet && isMobileMenuOpen ? (
              <div className="flex flex-row items-start mx-2 gap-5">
                <button
                  onClick={() => {
                    handleTabClick("overview");
                    handleToggleMobileMenu();
                  }}
                  className={classNames(
                    "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                    { "text-primary font-bold": activeTab === "overview" }
                  )}
                >
                  Overview
                </button>
                <button
                  onClick={() => {
                    handleTabClick("doctors");
                    handleToggleMobileMenu();
                  }}
                  className={classNames(
                    "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                    { "text-primary font-bold": activeTab === "doctors" }
                  )}
                >
                  Doctors
                </button>
                <button
                  onClick={() => {
                    handleTabClick("gallery");
                    handleToggleMobileMenu();
                  }}
                  className={classNames(
                    "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                    { "text-primary font-bold": activeTab === "gallery" }
                  )}
                >
                  Gallery
                </button>
              </div>
            ) : (
              !isMobileOrTablet && (
                <div className="flex flex-row sm:mx-10 sm:gap-16 items-center md:mx-16 ">
                  <button
                    onClick={() => handleTabClick("overview")}
                    className={classNames(
                      "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                      { "text-primary font-bold": activeTab === "overview" }
                    )}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleTabClick("doctors")}
                    className={classNames(
                      "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                      { "text-primary font-bold": activeTab === "doctors" }
                    )}
                  >
                    Doctors
                  </button>
                  <button
                    onClick={() => handleTabClick("gallery")}
                    className={classNames(
                      "hover:text-primary hover:border-b-2 hover:border-primary hover:font-bold",
                      { "text-primary font-bold": activeTab === "gallery" }
                    )}
                  >
                    Gallery
                  </button>
                </div>
              )
            )}
          </nav>

          <div className="mt-4">
            {activeTab === "overview" && (
              <Overview
                about={hospital?.value.summary}
                services={hospital?.value.services}
                latitude={hospital?.value.address?.latitude}
                longitude={hospital?.value.address?.longitude}
              />
            )}
            {activeTab === "doctors" && (
              <>
                {isLoading && <Loading />}
                {!isError &&
                hospital?.value.doctors &&
                hospital?.value.doctors.length > 0 ? (
                  <div className="w-full">
                    <DoctorsList
                      hospitalId={hospital?.value.id}
                      name={hospital?.value.institutionName}
                      allSpecialities={hospital?.value.allSpecialities}
                      allEducationalInstitutions={
                        hospital?.value.allEducationalInstitutions
                      }
                    />
                  </div>
                ) : (
                  <NoDoctors />
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
}  


export default HospitalDetailPage;
