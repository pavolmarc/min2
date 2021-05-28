import { useState } from "react";
import "./App.css";
import HttpGet from "./http.js";
import Navigation from "./Components/Navigation";
import { createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

function App() {
  const [currentRegion, setCurrentRegion] = useState("ke");
  const [activeTab, setActiveTab] = useState("kosice");

  const click = (region, id) => {
    setActiveTab(id);
    setCurrentRegion(region);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0078b8',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navigation click={click} activeTab={activeTab} />
      <HttpGet county={currentRegion} />
      </ThemeProvider>
    </div>
  );
}

export default App;
