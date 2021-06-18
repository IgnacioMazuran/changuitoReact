import React from "react";
import "./App.css";
import Productos from "./components/Productos";
// usamos la NAVBAR de bootstrap
// https://getbootstrap.com/docs/5.0/components/navbar/
//añadir material core e icons y styles (yarn add @material-ui/styles)

const App = () => {
  return (
    <React.Fragment>
      <Productos />
      <main className="container"></main>
    </React.Fragment>
  );
};

export default App;
