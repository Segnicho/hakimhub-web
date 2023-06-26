import HospitalCard from "./HospitalCard";
import Institution from "@/types/hospital/Hospital";
import NoData from "../commons/NoData";

interface HospitalsProps {
  hospitals: Institution[];
}
const HospitalsList: React.FC<HospitalsProps> = ({ hospitals }) => {
  return (
    <div>
      {hospitals?.length > 0 ? (
        <div>
          {hospitals.map((hospital: Institution) => (
            <div key={hospital.id} className="mb-16">
              <HospitalCard hospital={hospital} slideShow={3} />
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
