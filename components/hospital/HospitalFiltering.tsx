import React, { useState } from "react";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import HospitalsList from "../hospital/HospitalsList";
import LoadingPage from "../commons/Loading";
import SearchCard from "../commons/SearchCard";
import NoData from "../commons/NoData";
import FilterCard from "../commons/FilterCard";
import ErrorCard from "../commons/ErrorCard";

const HospitalFiltering: React.FC = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const [activeRange, setActiveRange] = useState(0);
  const [keyword, setKeyword] = useState("");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
  if (isError){
    return <div><ErrorCard /></div>
  }
  return (
    <div className="flex flex-wrap">
      <div className="w-3/4 p-16 pt-0 max-lg:w-full">
        <SearchCard keyword={keyword} onChange={handleInputChange} />
        
        {isLoading? (
          <LoadingPage />
        ): (
          <div>
            {hospitals?.value.length > 0 ? (
          <HospitalsList hospitals={hospitals.value} />
        ) : (
          <NoData />
        )}
          </div>
        )}
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
  );
};

export default HospitalFiltering;
