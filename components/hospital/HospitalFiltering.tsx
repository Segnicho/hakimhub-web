import React, { useState } from "react";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import HospitalsList from "../hospital/HospitalsList";
import SearchCard from "../commons/SearchCard";
import NoData from "../commons/NoData";
import FilterCard from "../commons/FilterCard";
import ErrorCard from "../commons/ErrorCard";
import { MdClose, MdFilterList } from "react-icons/md";
import HospitalsLoading from "../commons/HospitalsLoading";

const HospitalFiltering: React.FC = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const [activeRange, setActiveRange] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleOpenStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenStatus(event.target.checked);
  };

  const handleActiveRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveRange(parseInt(event.target.value));
  };

  const filters = {
    openStatus: openStatus,
    operationYears: activeRange,
    services: selectedServices,
    name: keyword,
  };

  const { data: hospitals, isLoading, isError } = useGetHospitalsQuery(filters);

  if (isError) {
    return (
      <div>
        <ErrorCard />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-3/4 pt-0 max-lg:w-full">
        <div className="flex flex-wrap">
          <div className="w-5/6">
            <SearchCard keyword={keyword} onChange={handleInputChange} />
          </div>
          <div className="w-1/6 flex flex-wrap items-center -mt-8">
            <button
              className="max-lg:block hidden flex flex-wrap self-center ml-4 hover:text-gray-900 "
              onClick={handleClick}
            >
              <MdFilterList className="text-primary-text text-5xl mr-4 cursor-pointer ml-auto" />
            </button>
            <div
              className={`fixed top-4 right-0 h-full w-3/5 max-sm:w-full max-lg:block bg-white shadow-lg transform ${
                showFilter ? "translate-x-0" : "translate-x-full"
              } transition-all duration-300`}
              style={{ zIndex: 9999 }}
            >
              <div className="px-6 sm:px-8 sm:pt-0 h-full overflow-y-auto">
                <div className="py-4 flex flex-wrap justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-900"
                    onClick={handleClick}
                  >
                    <MdClose className="text-sm flex flex-wrap w-full justify-end" />
                  </button>
                </div>
                <FilterCard
                  openStatus={openStatus}
                  handleOpenStatus={handleOpenStatus}
                  activeRange={activeRange}
                  handleActiveRange={handleActiveRange}
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                />
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <HospitalsLoading />
        ) : (
          <div>
            {hospitals?.value.length > 0 ? (
              <HospitalsList hospitals={hospitals.value} />
            ) : (
              <NoData />
            )}
          </div>
        )}
      </div>
      <div className="w-1/4 lg:block hidden top-12 right-0 bg-white shadow-lg fixed min-h-screen">
        <FilterCard
          openStatus={openStatus}
          handleOpenStatus={handleOpenStatus}
          activeRange={activeRange}
          handleActiveRange={handleActiveRange}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
      </div>
      {showFilter && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white z-10"
          style={{
            backdropFilter: "blur(0.5px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        ></div>
      )}
    </div>
  );
};

export default HospitalFiltering;
