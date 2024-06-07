import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import AboutMe from "../AboutMe";
import MyWork from "../MyWork";

const RouterOutlet = () => {
  return (
    <Routes>
      {/* Routes home */}
      <Route path="/" element={<Home />} />

      {/* Routes abou */}
      <Route path="/about-me" element={<AboutMe />} />

      {/* Routes work */}
      <Route path="/my-work" element={<MyWork />} />
    </Routes>
  );
};

export default RouterOutlet;
