import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Card from "../components/Card";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };

    dispatch(login(userData));
  };
  return (
    <Card>
      <div className="max-w-[320px] mx-auto py-16">
        <h1 className="text-3xl font-bold text-center">התחברות</h1>

        <form className="w-full flex flex-col py-4">
          <input
            className="p-3 my-2 bg-white-700 roudned text-gray-600 text-right"
            type="email"
            placeholder="אימייל"
            autoComplete="email"
            value={email}
            name="email"
            required
            onChange={onChange}
          />
          <input
            className="p-3 my-2 bg-white-700 rounded text-gray-600 text-right"
            type="password"
            placeholder="סיסמא"
            autoComplete="current-password"
            value={password}
            name="password"
            required
            onChange={onChange}
          />
          <button
            onClick={onSubmit}
            className="bg-green-500 py-3 my-6 rounded font-bold"
          >
            התחבר
          </button>

          <p className="text-right">
            <span className="text-green-500">עוד לא נרשמת?</span>{" "}
            <Link to="/register">הירשם</Link>
          </p>
        </form>
      </div>
    </Card>
  );
};
export default Login;
