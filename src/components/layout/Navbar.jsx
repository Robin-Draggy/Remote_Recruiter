import React, { useEffect, useState } from "react";
import { BorderBtn } from "../ui/BorderBtn";
import { BorderLessBtn } from "../ui/BorderLessBtn";
import { BiMenu } from "react-icons/bi";
import { FaX } from "react-icons/fa6";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // detect scroll direction
      if (currentScrollY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      // background trigger
      setScrolled(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 py-4 md:py-6
        transition-all duration-500 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
          ? "bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="w-24 md:w-30">
          <img src="/images/Menu.png" alt="Logo" className="w-full" />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <BorderLessBtn title="Sign In" />
          <BorderBtn title="Sign Up" />
        </div>

        {/* Mobile */}
        <button
        aria-label="open or close"
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaX size={20} /> : <BiMenu size={28} />}
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