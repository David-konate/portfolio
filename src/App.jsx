import React from "react";
import NavBar from "./components/NavBar";
import RouterOutlet from "./pages/components/RouterOutlet";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <RouterOutlet />
      <Footer />
    </>
  );
}

export default App;
