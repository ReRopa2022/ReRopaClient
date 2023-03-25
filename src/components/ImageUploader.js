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
      console.log(data.files[0].type);
      convertToBase64(data.files[0]);
    }
  };

  return (
    <div>
      {imageDisplay ? (
        <img src={imageDisplay} alt="" height="100" width="100" />
      ) : null}
      <form>
        {!watch("files") || watch("files").length === 0 ? (
          <div>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.jfif"
              id="fileupload"
              {...register("files")}
            />
          </div>
        ) : (
          <strong>{watch("files")[0].name}</strong>
        )}
        <button onClick={handleSubmit(onSubmit)} type="submit">
          העלה תמונה
        </button>
        {errors.files && <div>{errors.files.message}</div>}
      </form>
    </div>
  );
};

export default ImageUploader;
