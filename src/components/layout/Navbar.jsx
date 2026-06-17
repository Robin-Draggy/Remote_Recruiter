import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BorderBtn } from "../ui/BorderBtn";
import { BorderLessBtn } from "../ui/BorderLessBtn";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E3E85] px-4 md:px-8 lg:px-12 py-5 md:py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-24 md:w-30">
          <img src="/images/Menu.png" alt="Logo" className="w-full" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <BorderLessBtn title="Sign In" />
          <BorderBtn title="Sign Up" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3">
          <BorderLessBtn title="Sign In" />
          <BorderBtn title="Sign Up" />
        </div>
      </div>
    </nav>
  );
};