import HospitalCard from "./HospitalCard";
import Institution from "@/types/Hospital";
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
              <HospitalCard hospital={hospital} />
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
