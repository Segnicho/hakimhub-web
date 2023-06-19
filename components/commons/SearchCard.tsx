import React from "react";
import { MdSearch, MdSend } from "react-icons/md";

const SearchCard: React.FC = () => {
  return (
    <div className="p-16 pb-0 pt-5">
      <div className="flex items-center p-2 ml-6 mb-10 rounded-lg shadow-md mt-5 bg-white max-md:w-full justify-center">
        <input
          type="text"
          className="mr-2 p-2 outline-none w-full bg-inherit"
          placeholder="Search hospitals?"
        />
        <MdSearch className="text-primary-text text-3xl mr-4 cursor-pointer ml-auto" />
      </div>
    </div>
  );
};

export default SearchCard;
