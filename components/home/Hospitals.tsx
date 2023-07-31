import React from "react";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import HospitalsList from "@/components/hospital/HospitalsList";

import HospitalLoading from "../commons/HospitalLoading";

const Hospitals: React.FC = () => {
  const filters = {
    openStatus: false,
    operationYears: 0,
    services: [],
    name: "",
  };
  const { data: hospitals, isLoading, isError } = useGetHospitalsQuery(filters);
  return (
    <div data-testid="hospitals">
      <h3 className=" text-[40px] font-semibold text-center pb-3">
        Our <span className="text-primary">Hospitals</span>{" "}
      </h3>
      {isLoading && (
        <div data-testid="hospital-loading">
          {" "}
          <HospitalLoading />{" "}
        </div>
      )}
      {isLoading && <HospitalLoading />}
      {hospitals && <HospitalsList hospitals={hospitals.value.slice(0, 2)} />}
    </div>
  );
};

export default Hospitals;
