import React from "react";

const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}px`,
    top: `${dot[1]}px`,
  };

  return <div className="snake-food" style={style}></div>;
};

export default Food;
