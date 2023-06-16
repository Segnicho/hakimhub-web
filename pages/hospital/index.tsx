<<<<<<< HEAD
import FilterCard from "@/components/commons/FilterCard"

const HospitalPage : React.FC = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-3/4">hospital list</div>
            <FilterCard /> 
        </div>
    )
}

export default HospitalPage
=======
import HospitalCard from "@/components/hospital/HospitalCard";
import HospitalsList from "@/components/hospital/HospitalsList";

export default function HospitalsPage() {
    return (
        <div className="bg-primary-bg">
            <HospitalsList />
        </div>
    )
}
>>>>>>> da3edc2f4c6e3b2ae353d486f989702b1d339de5
