import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const Search: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value.trim().length > 0) {
      router.push("/chat");
    }
  };
  return (
    <div
      data-testid="search"
      className="flex items-center p-2 rounded shadow-md mt-5 max-md:mx-auto bg-[#EFF3F9] w-2/5 max-md:w-full"
    >
      <input
        type="text"
        className="mr-2 p-2 outline-none w-full bg-inherit"
        placeholder="Hi, This will take you to the chat boat😊"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <MdSend className="text-primary text-xl cursor-pointer ml-auto" />
    </div>
  );
};

export default Search;
