import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MapComponent from "./components/map/Map";
import HeaderSection from "./components/layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderSection />
    <MapComponent />
  </React.StrictMode>
);
