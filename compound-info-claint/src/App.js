import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import RmModule from "Components/Rm Modele/RmModule";
import Home from "Components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RmAddForm from "Components/Rm Modele/RmAddForm";
import RmDisplay from "Components/Rm Modele/RmDisplay";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="RmHome" element={<RmModule />} />
        <Route exact path="/RmHome/RmAddForm" element={<RmAddForm />} />
        <Route exact path="/RmHome/DisplayMaterials" element={<RmDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
