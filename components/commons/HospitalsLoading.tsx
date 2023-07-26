import HospitalLoading from "./HospitalLoading"

const HospitalsLoading : React.FC = () => {
    const Load = []
    return (
        <div className="min-h-screen">
          <div>
            <div>
              {[...Array(4)].map((_, index) => (
                <HospitalLoading key={index} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default HospitalsLoading;