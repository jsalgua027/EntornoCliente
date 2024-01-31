
import React from "react";
import { Outlet,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
function App() {
  return (
    <div className="App">
      <h1>Ejercicios de Recuperación</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/ReyesGodos">Reyes Godos</Link> |{" "}
        <Link to="/Conversor">Conversor</Link> |{" "}
        <Link to="/Mi_primera_App">Mi primera APP</Link>|{" "}
        <Link to="/SinoApp">Sino APP</Link>|{" "}
        <Link to="/ListaDeseos">Lista Deseos</Link>|{" "}
        <Link to="/CocheFantastico">Coche Fantástico</Link>
      </nav>
        <Outlet/>
    </div>
  );
}

export default App;
