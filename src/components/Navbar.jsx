import React from 'react'
import { cashAppLogo, eyeButton } from '../Assets/assets'
import {HiMenuAlt4} from "react-icons/hi"


const navLinks = [
  {
    id: 1,
    link: "sign up",
  },
  {
    id: 2,
    link: "Legal",
  },
  {
    id: 3,
    link: "Licenses",
  },
  {
    id: 4,
    link: "Security",
  },
  {
    id: 5,
    link: "Careers",
  },
  {
    id: 6,
    link: "Press",
  },
  {
    id: 7,
    link: "Support",
  },
  {
    id: 8,
    link: "Status",
  },
  {
    id: 9,
    link: "Codeblog",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-8 text-white bg-none fixed top-0 left-0 w-full z-[999]">
      <img src={cashAppLogo} alt="Cash App Logo"  />
      <ul className="hidden lg:flex items-center justify-center list-none ">
        {navLinks.map((navlink) => {
          return (
            <li
              key={navlink.id}
              className=" uppercase font-extrabold px-4 py-2"
            >
              {navlink.link}
            </li>
          );
        })}
          </ul>
          <HiMenuAlt4 size={30} className='block lg:hidden' />
      <img src={eyeButton} alt="Eye button"  />
    </div>
  );
}

export default Navbar