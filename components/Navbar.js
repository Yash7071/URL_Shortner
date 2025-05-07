import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl cursor-pointer font-bold">
          <Link href="/">BitLinks</Link>
        </div>

        <ul className="flex items-center space-x-4">
          <Link href="/">
            <li className="text-white hover:text-gray-300"> Home </li>
          </Link>
          <Link href="/about">
            <li className="text-white hover:text-gray-300"> About </li>
          </Link>

          <li className="flex space-x-4 text-white">
            <Link href="/shorten">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Github
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
