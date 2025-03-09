"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bell, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 w-full px-8 h-16 md:px-16 lg:px-24 flex items-center justify-between transition-all duration-300 z-50 bg-transparent">
      {/* Logo dan Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo Netflix */}
        <div className="h-16 w-32 relative">
          <Image
            src="/logo-netflix2.png"
            alt="Netflix"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-gray-300 cursor-pointer font-semibold">
            Home
          </li>
          <li className="hover:text-gray-300 cursor-pointer font-semibold">
            Series
          </li>
          <li className="hover:text-gray-300 cursor-pointer font-semibold">
            Movies
          </li>
          <li className="hover:text-gray-300 cursor-pointer font-semibold">
            New and Popular
          </li>
          <li className="hover:text-gray-300 cursor-pointer font-semibold">
            My List
          </li>
        </ul>
      </div>

      {/* Ikon Search, Notifikasi, dan Avatar */}
      <div className="flex items-center space-x-6">
        <Search className="text-white w-6 h-6 cursor-pointer hover:text-gray-300" />
        <Bell className="text-white w-6 h-6 cursor-pointer hover:text-gray-300" />

        {/* Wrapper untuk Clipping Mask */}
        <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer">
          <Image
            src="/33.jpeg"
            alt="User Avatar"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
