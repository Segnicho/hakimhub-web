import Image from "next/image";
import { HiChat } from "react-icons/hi";

import { logo } from "@/public";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="sticky flex top-0 justify-between px-5 z-50 bg-white py-2 shadow-sm">
      <Image src={logo} alt="Hakimhub's logo" className="scale-75" />
      <div className="flex font-medium text-xl mr-10">
        <Link href="/hospitals" className="my-auto mr-4">
          Hospitals
        </Link>
        <Link href="/chat" className="flex">
          <HiChat className="w-10 h-10 text-blue-500" />
          <span className="my-auto ">Chat</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
