import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

const Routers = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
};
export default Routers;