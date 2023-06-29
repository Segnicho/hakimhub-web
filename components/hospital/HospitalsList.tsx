import HospitalCard from "./HospitalCard";
import Institution from "@/types/institution/institution";
import NoData from "../commons/NoData";

interface HospitalsProps {
  hospitals: Institution[];
}
const HospitalsList: React.FC<HospitalsProps> = ({ hospitals }) => {
  return (
    <div className="min-h-screen">
      {hospitals?.length > 0 ? (
        <div>
          {hospitals.map((hospital: Institution) => (
            <div key={hospital.id} className="mb-16">
              <HospitalCard hospital={hospital} slideShow={4} />
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default HospitalsList;
