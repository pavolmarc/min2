import { useState } from "react";
import "./App.css";
import logo from "./Images/logo.png";
import HttpGet from "./http.js";
import Button from "@material-ui/core/Button";
import Navigation from "./Components/Navigation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [currentRegion, setCurrentRegion] = useState("ta");
  const [activeTab, setActiveTab] = useState("trnava");

  const click = (region, id) => {
    setActiveTab(id);
    setCurrentRegion(region);
  };

  return (
    <div className="App">
      <Navigation click={click} activeTab={activeTab} />
      <HttpGet county={currentRegion} />
    </div>
  );
}

export default App;
