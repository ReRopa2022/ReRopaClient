import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addLocation, reset } from "../../features/manager/addLocationSlice";
import GreenButton from "../../components/ui/GreenButton";

const DonateLocation = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      city: "",
      street: "",
      streetNumber: "",
      type: "",
      info: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.location
  );

  const onSubmit = (data) => {
    dispatch(addLocation(data));
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      alert("Thank you for donation ,hope to see you again. ");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full h-screen mb-3">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-18 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px]  mx-auto ">
            <h1 className="text-3xl font-bold  text-center">
              הוספת נקודת איסוף חדשה
            </h1>

            <form
              className="w-full flex flex-col py-4"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="עיר"
                type="text"
                {...register("city")}
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="רחוב"
                type="text"
                {...register("street")}
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מספר רחוב"
                type="text"
                {...register("streetNumber")}
              />
              <select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right rtl-grid "
                placeholder="סוג נקודה"
                type="text"
                {...register("type")}
              >
                <option>איסוף בגדים</option>
                <option>מיחזור</option>
              </select>
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מידע"
                type="text"
                style={{ height: "100px" }}
                {...register("info")}
              />

              <GreenButton type="submit" buttonName="הוספה" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateLocation;
