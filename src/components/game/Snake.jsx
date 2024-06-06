import { Box } from "@mui/material";
import React from "react";

const Snake = ({ snakeDots }) => {
  return (
    <Box>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <Box className="snake-dot" key={i} style={style}></Box>;
      })}
    </Box>
  );
};

export default Snake;
