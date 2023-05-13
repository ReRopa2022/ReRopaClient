import React from "react";
import PointCreator from "./PointCreator";

const PointsCreator = (props) => {
  console.log(props?.points);
  return (
    <div>
      {props.points &&
        props.points.map((point) => (
          <PointCreator key={point._id} point={point} />
        ))}
    </div>
  );
};

export default PointsCreator;
