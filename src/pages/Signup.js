import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

const Signup = () => {
  //const { emailRef, passwordRef } = useRef({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, email, password, passwordConfirm } = formData;

  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };

    dispatch(register(userData));
  };

  useEffect(() => {
    if (isError) {
      //toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  //firstName lastName userName emailRef passwordRef passwordRefConfirm

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-ful"></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>

            <form className="w-full flex flex-col py-4" onSubmit={onSubmit}>
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="First Name"
                autoComplete="firstName"
                value={firstName}
                name="firstName"
                required
                onChange={onChange}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="text"
                placeholder="Last Name"
                autoComplete="lastName"
                value={lastName}
                name="lastName"
                required
                onChange={onChange}
              />

              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
                name="email"
                autoComplete="email"
                onChange={onChange}
                value={email}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                onChange={onChange}
                value={password}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Confirm Password"
                autoComplete="passwordConfirm"
                value={passwordConfirm}
                name="passwordConfirm"
                required
                onChange={onChange}
              />
              <button className="bg-green-500 py-3 my-6 rounded font-bold">
                Sign Up
              </button>

              <p className="py-8">
                <span className="text-green-500">Already registered?</span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
