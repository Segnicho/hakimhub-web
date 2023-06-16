import HospitalCard from "./HospitalCard";

const HospitalsList: React.FC = () => {
  const numHospitals = 4;
  const hospitals = Array(numHospitals)
    .fill()
    .map((_, index) => <HospitalCard key={index} />);
  return (
    <div className="text-primary-text">
      {hospitals.map((hospital, index) => (
        <div key={index} className="mb-16">
          {hospital}
        </div>
      ))}
    </div>
  );
};

export default HospitalsList;
