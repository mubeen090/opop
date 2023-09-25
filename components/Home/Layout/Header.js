import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import LogoSkillGarage from "../../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-2 md:px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <Link href="/">
            <div className="col-start-1 col-end-2 flex items-center">
              <LogoSkillGarage className="h-3 md:h-6 w-auto" />
            </div>
          </Link>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "hero"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("courses");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "courses"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Programs
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tutors"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutors");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "tutors"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Tutors
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonials"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Testimonials
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <a
              href="http://web.classplusapp.com" // Update the link here
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-600 transition-all"
            >
              Sign In
            </a>
            <a
              href="http://web.classplusapp.com" // Update the link here
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-600 transition-all"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {/* ... (rest of the code remains the same) */}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
