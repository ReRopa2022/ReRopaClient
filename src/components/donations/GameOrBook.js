import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { donateBookOrGame, reset } from "../../features/donation/donationSlice";
import GreenButton from "../ui/GreenButton";

const GameOrBook = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user: props.donatorName,
      type: props.type,
      category: "",
      name: "",
      age: "",
    },
  });

  const onSubmit = async (data) => {
    await dispatch(donateBookOrGame(data));
    dispatch(reset());
  };
  return (
    <form
      className="w-full flex flex-col py-2 "
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      {" "}
      <input
        className="p-3 my-2 bg-white-700 roudned text-gray-600 text-right"
        type="text"
        placeholder={props.itemName}
        required
        {...register("name")}
      />
      <input
        className="p-3 my-2 bg-white-700 roudned text-gray-600 text-right"
        type="text"
        placeholder={props.categoryName}
        required
        {...register("category")}
      />
      <input
        className="p-3 my-2 bg-white-700 rounded rtl-grid text-gray-600 text-right"
        type="number"
        placeholder="גיל"
        name="age"
        min={1}
        max={99}
        required
        {...register("age")}
      />
      <GreenButton type="submit" buttonName="תרום" />
    </form>
  );
};

export default GameOrBook;
