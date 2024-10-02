import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import AboutMe from "../AboutMe";
import MyWork from "../MyWork";
import PrivacyPolicy from "../PrivacyPolicy";
import LegalNotice from "../LegalNotice";
import TermsOfUse from "../TermsOfUse";

const RouterOutlet = () => {
  return (
    <Routes>
      {/* Routes home */}
      <Route path="/" element={<Home />} />

      {/* Routes abou */}
      <Route path="/about-me" element={<AboutMe />} />

      {/* Routes work */}
      <Route path="/my-work" element={<MyWork />} />
      <Route path="/politique-conf" element={<PrivacyPolicy />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
      <Route path="/CGU" element={<TermsOfUse />} />
    </Routes>
  );
};

export default RouterOutlet;
