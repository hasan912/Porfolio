"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import Socials from "../components/Socials";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute z-30 w-full bg-transparent">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              width={220}
              height={48}
              alt="logo"
              className="w-[180px] sm:w-[200px] lg:w-[230px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Socials */}
          <div className="hidden xl:flex">
            <Socials />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md focus:outline-none"
            >
              {/* Toggle icon based on isOpen state */}
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden flex flex-col items-center gap-6 pb-10 bg-#191a20ff rounded-lg mt-2">
            <Socials />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
