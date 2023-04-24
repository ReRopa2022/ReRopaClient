import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full bottom-0 fixed flex justify-center h-[7%] bg-green-600 ">
      <div className="max-w-screen-xl px-4  mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 pt-2">
          <div className="px-5 py-2">
            <Link
              className="text-base leading-6 font-bold text-green-100 hover:text-green-900"
              to="/contact"
            >
              צרו קשר
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/about"
              className="text-base leading-6 font-bold text-green-100 hover:text-green-900"
            >
              ?מי אנחנו{" "}
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              className="text-base leading-6 font-bold text-green-100 hover:text-green-900"
              to="/login"
            >
              התחברות מנהל
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
/*<p className="mt-8 text-base leading-6 text-center text-white">
          © 2022 ReRopa, All rights reserved.
        </p>*/
