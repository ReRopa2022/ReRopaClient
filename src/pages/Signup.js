import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser, reset } from "../features/auth/authSlice";
import Card from "../components/ui/Card";
import GreenButton from "../components/ui/GreenButton";
import Spinner from "../components/ui/Spinner";

const Signup = () => {
  //const { emailRef, passwordRef } = useRef({});

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("לא התקבל משתמש חדש,אנא נסה שוב");
    }
    if (isSuccess || user) {
      toast.success("משתמש התקבל, ברוכים הבאים");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  //firstName lastName userName emailRef passwordRef passwordRefConfirm
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Card>
      <div className="max-w-[320px] h-[600px] mx-auto py-16">
        <h1 className="text-3xl font-bold text-center"> הרשמה</h1>

        <form
          className="w-full flex flex-col py-4"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="text"
            placeholder="שם פרטי"
            autoComplete="firstName"
            name="firstName"
            required
            {...register("firstName")}
          />
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="text"
            placeholder="שם משפחה"
            autoComplete="lastName"
            name="lastName"
            required
            {...register("lastName")}
          />

          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="email"
            placeholder="אימייל"
            name="email"
            autoComplete="email"
            {...register("email")}
          />
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="password"
            placeholder="סיסמא"
            name="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="password"
            placeholder="אימות סיסמא"
            autoComplete="passwordConfirm"
            name="passwordConfirm"
            required
            {...register("passwordConfirm")}
          />
          <GreenButton type="submit" buttonName="הירשם" />

          <p className=" text-right">
            <span className="text-green-500">כבר רשום?</span>{" "}
            <Link
              className="hover:text-gray-500 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-800 active:shadow-lg"
              to="/login"
            >
              התחבר
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

export default Signup;
