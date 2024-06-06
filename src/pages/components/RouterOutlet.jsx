import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import AboutMe from "../AboutMe";

const RouterOutlet = () => {
  return (
    <Routes>
      {/* Routes home */}
      <Route path="/" element={<Home />} />

      {/* Routes abou */}
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};

export default RouterOutlet;
