import Image from "next/image";
import { HiChat } from "react-icons/hi";

import { cross } from "@/public";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className="sticky flex top-0 justify-between px-5 z-50 bg-white py-2 shadow-sm">
      <Link href="/" className="flex items-center">
        <Image src={cross} alt="Hakimhub's logo" className="scale-75" />
        <span className="font-bold text-[20px] pt-1 max-sm:hidden">Hakim<span className="text-primary">Hub</span>
        </span>
      </Link>
      <div className="flex font-medium text-xl mr-10">
        <Link href="/hospitals" className="my-auto mr-4">
          Hospitals
        </Link>
        <Link href="/chat" className="flex">
          <HiChat className="w-10 h-10 text-primary" />
          <span className="my-auto max-sm:hidden">Chat</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
