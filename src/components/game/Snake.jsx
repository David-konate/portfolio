import React from "react";

const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}px`,
          top: `${dot[1]}px`,
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
};

export default Snake;
