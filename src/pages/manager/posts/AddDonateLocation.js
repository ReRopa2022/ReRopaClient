import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addLocation, reset } from "../../../features/manager/addLocationSlice";
import GreenButton from "../../../components/ui/GreenButton";
import Spinner from "../../../components/ui/Spinner";
const DonateLocation = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      city: "",
      street: "",
      street_no: "",
      type: "",
      info: "",
      lat: "",
      long: "",
      display: true,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.location
  );

  const onSubmit = async (data) => {
    await dispatch(addLocation(data));
  };
  useEffect(() => {
    if (isError) {
      toast.error("לא התקבלה נקודה חדשה, אנא נסה שוב!");
    }
    if (isSuccess) {
      toast.success("נקודה התווספה בהצלחה");
      dispatch(reset());
      navigate("/manager-home");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center pt-55">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="w-full h-[100%]">
      <img
        className="hidden sm:block absolute w-full h-[100%] object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute w-full h-full px-4 py-10">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px]  mx-auto ">
            <h1 className="text-3xl font-bold pt-5 text-center">
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
                required
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="רחוב"
                type="text"
                {...register("street")}
                required
              />

              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מספר רחוב"
                type="text"
                {...register("street_no")}
                required
              />

              <select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right rtl-grid "
                type="text"
                {...register("type")}
                required
              >
                <option default selected="selected" disabled>
                  סוג נקודה
                </option>
                <option>איסוף בגדים</option>
                <option>מיחזור</option>
              </select>
              <textarea
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מידע"
                type="text"
                {...register("info")}
                required
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="קו אורך"
                type="text"
                {...register("lat")}
                required
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="קו רוחב"
                type="text"
                {...register("long")}
                required
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
