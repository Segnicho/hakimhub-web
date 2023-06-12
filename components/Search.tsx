import React from "react";
import { MdSend } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center p-2 rounded shadow-md mt-5 ml-3 bg-[#EFF3F9] w-1/2">
      <input
        type="text"
        className="mr-2 p-2 outline-none w-full bg-inherit"
        placeholder = "Write Your Symptoms"
      />
      <MdSend className="text-blue-500 text-xl cursor-pointer ml-auto" />
    </div>
  );
};

export default Search;
