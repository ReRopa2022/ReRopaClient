import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-white w-full bottom-0 fixed flex justify-center h-16 ">
      <div className="max-w-screen-xl px-4  mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
              to="/contact"
            >
              צרו קשר
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/about"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              ?מי אנחנו{" "}
            </Link>
          </div>
        </nav>

        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2022 ReRopa, All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
