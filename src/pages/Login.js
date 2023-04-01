import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login, reset } from "../features/auth/authSlice";
import Card from "../components/ui/Card";
import GreenButton from "../components/ui/GreenButton";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("משהו לא כשורה ,אנא נסה שוב");
    }
    if (isSuccess) {
      toast.success("ברוכים השבים");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <Card>
      <div className="max-w-[320px] mx-auto py-16">
        <h1 className="text-3xl font-bold text-center">התחברות מנהל</h1>

        <form
          className="w-full flex flex-col py-4"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <input
            className="p-3 my-2 bg-white-700 roudned text-gray-600 text-right"
            type="email"
            placeholder="אימייל"
            autoComplete="email"
            name="email"
            required
            {...register("email")}
          />
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="password"
            placeholder="סיסמא"
            autoComplete="current-password"
            name="password"
            required
            {...register("password")}
          />
          <GreenButton type="submit" buttonName="התחברות" />
        </form>
      </div>
    </Card>
  );
};
export default Login;

/* <p className="text-right">
            <span className="text-green-500">עוד לא נרשמת?</span>{" "}
            <Link
              className="hover:text-gray-500 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-800 active:shadow-lg"
              to="/register"
            >
              הירשם
            </Link>
          </p>*/
