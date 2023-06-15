import HospitalCard from "./HospitalCard";

const hospitals = [
  <HospitalCard />,
  <HospitalCard />,
  <HospitalCard />,
  <HospitalCard />
];
const HospitalsList: React.FC = () => {
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
