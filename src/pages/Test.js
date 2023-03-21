import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/donate/image";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";
/*
      {imageDataList?.map((imageData, index) => {
        const base64Data = Buffer.from(imageData.img.data).toString("base64"); // convert Buffer to base64-encoded string
        const imageUrl = `data:image/png;base64,${base64Data}`; // create image URL from base64 string
        return <img key={index} src={imageUrl} alt={`Bin Image ${index}`} />;
      })}*/

// const Test = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     axios
//       .post(API_URL, { imageId: "6418dc83e2a674bef343dcde" })
//       .then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//   }, [data]);
//   //const imageDataList = data?.0.img.data.data;
//   return <div></div>;
// };

// const Test = () => {
//   const [data, setData] = useState();
//   const [imageData, setImageData] = useState("");

//   useEffect(() => {
//     axios
//       .post(API_URL, { imageId: "6418dc83e2a674bef343dcde" })
//       .then((response) => {
//         setData(response.data);
//         setImageData(
//           "data:" +
//             response.data.img.contentType +
//             ";base64," +
//             btoa(
//               String.fromCharCode(...new Uint8Array(response.data?.img.data))
//             )
//         );
//       });
//   }, []);
// return (
//   <div>
//     <img src={imageData} alt="im" />
//   </div>
// );
// };
// const Test = () => {
//   const [data, setData] = useState();
//   const [imageData, setImageData] = useState("");
//   useEffect(() => {
//     const fetchImage = async () => {
//       await axios
//         .post(API_URL, { imageId: "6418dc83e2a674bef343dcde" })
//         .then((response) => {
//           setData(response.data);
//           console.log("Response data (first useEffect):");
//           console.log(response.data);
//           if (data?.data[0]) {
//             setImageData(
//               "data:" +
//                 data.data[0].img.contentType +
//                 ";base64," +
//                 btoa(
//                   String.fromCharCode(
//                     ...new Uint8Array(data.data[0]?.img.data.data)
//                   )
//                 )
//             );
//           }
//         });
//     };
//     fetchImage();
//   }, []);

//   return <div>{imageData && <img src={imageData} alt="ima" />}</div>;
// };

const Test = () => {
  const [data, setData] = useState();
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.post(API_URL, {
        imageId: "6418dc83e2a674bef343dcde",
      });
      setData(response.data);
    };
    fetchImage();
  }, []);

  useEffect(() => {
    if (data?.data) {
      setImageData(
        "data:" +
          data.data.img.contentType +
          ";base64," +
          btoa(String.fromCharCode(...new Uint8Array(data.data?.img.data.data)))
      );
    }
  }, [data]);

  return (
    <div>
      <img src={imageData} alt="imm" />
    </div>
  );
};

export default Test;
