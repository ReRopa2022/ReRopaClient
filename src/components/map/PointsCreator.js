import React from "react";
import PointCreator from "./PointCreator";

const PointsCreator = (props) => {
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
