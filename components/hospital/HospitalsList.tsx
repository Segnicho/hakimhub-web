import HospitalCard from "./HospitalCard";

const HospitalsList: React.FC = () => {
  return (
    <div>
      {Array(7).map((comp, idx) => (
        <HospitalCard key={idx} />
      ))}
    </div>
  );
};

export default HospitalsList;
