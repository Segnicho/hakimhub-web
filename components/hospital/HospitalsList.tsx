import HospitalCard from "./HospitalCard";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import Institution from "@/types/Hospital";
import LoadingPage from "../commons/Loading";
import NoData from "../commons/NoData";

const HospitalsList: React.FC = () => {
  const { data: hospitals, isLoading, isError } = useGetHospitalsQuery("");

  if (isLoading) {
    return <LoadingPage />
  }
  
  return (
    <div className="text-primary-text">
     {
     hospitals.value.map((hospital: Institution) => (
        <div key={hospital.id} className="mb-16">
          <HospitalCard hospital={hospital} />
        </div>
      ))}
      {/* <NoData /> */}
    </div>
  );
};

export default HospitalsList;