import React from "react";
import {  MdSearch } from "react-icons/md";
interface SearchProps {
  keyword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchCard: React.FC<SearchProps> = ({ keyword, onChange }) => {
  return (
    <div className="text-primary-text sticky top-[85px]">
      <div className="flex items-center p-2 mb-10 rounded-lg shadow-md bg-white max-md:w-full justify-center">
        <input
          type="text"
          className="mr-2 p-2 outline-none w-full bg-inherit"
          placeholder="Search hospitals?"
          value={keyword}
          onChange={onChange}
        />
        <MdSearch className="text-primary-text text-3xl mr-4 cursor-pointer ml-auto" />
      </div>
    </div>
  );
};

export default SearchCard;
