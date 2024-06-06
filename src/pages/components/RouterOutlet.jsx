import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";

const RouterOutlet = () => {
  return (
    <Routes>
      {/* Routes home */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouterOutlet;
