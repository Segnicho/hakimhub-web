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