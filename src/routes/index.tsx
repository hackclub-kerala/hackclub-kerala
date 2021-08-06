import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../repositories/home";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Route  exact path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default RoutePage;
