import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversor from "./componentes/Conversor";
import Mi_primera_App from "./componentes/Mi_primera_App";
import ReyesGodos from "./componentes/ReyesGodos";
import SinoApp from "./componentes/SinoApp";
import ListaDeseos from "./componentes/ListaDeseos";
import CocheFantastico from "./componentes/CocheFantastico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Conversor" element={<Conversor />} />
        <Route path="ReyesGodos" element={<ReyesGodos />} />
        <Route path="Mi_primera_App" element={<Mi_primera_App />} />
        <Route path="SinoApp" element={<SinoApp />} />
        <Route path="ListaDeseos" element={<ListaDeseos/>}/>
        <Route path="CocheFantastico" element={<CocheFantastico/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
