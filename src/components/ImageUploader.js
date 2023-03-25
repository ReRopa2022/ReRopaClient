import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  files: yup.mixed().test("required", "Please select an image", (value) => {
    return value && value.length;
  }),
});

const ImageUploader = (props) => {
  const [imageDisplay, setImageDisplay] = useState();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const convertToBase64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageDisplay(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    if (data.files.length > 0) {
      props.setImage(data.files[0]);
      convertToBase64(data.files[0]);
    }
  };

  return (
    <div className="rtl-grid  flex flex-col flex-wrap justify-start">
      {imageDisplay ? (
        <img src={imageDisplay} alt="" height="100" width="100" />
      ) : null}

      {!watch("files") || watch("files").length === 0 ? (
        <div className="flex flex-wrap">
          <input
            type="file"
            className="rtl-grid"
            accept=".png,.jpg,.jpeg,.jfif"
            id="fileupload"
            {...register("files")}
          />
        </div>
      ) : (
        <strong>{watch("files")[0].name}</strong>
      )}
      <div className="">
        <button className="" onClick={handleSubmit(onSubmit)} type="submit">
          העלה תמונה
        </button>
      </div>
      {errors.files && <div>{errors.files.message}</div>}
    </div>
  );
};

export default ImageUploader;
