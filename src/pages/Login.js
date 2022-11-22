import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen mb-3">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>

            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-white-700 rouded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-white-700 rouded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-green-500 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-green-500">New to ReRopa?</span>{" "}
                <Link to="/register">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
