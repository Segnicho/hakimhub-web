import FilterCard from "@/components/commons/FilterCard";
import SearchCard from "@/components/commons/SearchCard";
import HospitalsList from "@/components/hospital/HospitalsList";

export default function HospitalsPage() {
  return (
    <div className="bg-primary-bg">
      <div className="flex flex-wrap">
        <div className="w-3/4 p-16 pt-0 max-lg:w-full">
          <SearchCard />
          <HospitalsList />
        </div>
        <div className="lg:block w-1/4 hidden">
          <FilterCard />
        </div>
      </div>
    </div>
  );
}