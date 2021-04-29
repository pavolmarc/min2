import { useState } from "react";
import "./App.css";
import logo from "./Images/logo.png";
import HttpGet from "./http.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Navigation from "./Components/Navigation";

function App() {
  const [currentRegion, setCurrentRegion] = useState("ba");
  const [activeTab, setActiveTab] = useState("bratislava");

  const click = (region, id) => {
    setActiveTab(id);
    setCurrentRegion(region);
  };

  return (
    <div className="App">
      <Navigation click={click} activeTab={activeTab}/>

      <div className="topnav">
        <img className="logo" src={logo} alt="logo" />

          <Button
            className={activeTab === "trnava" ? "activeTa" : "normal"}
            id="trnava"
            onClick={() => {
              click("ta", "trnava");
            }}
          >
            Trnava
          </Button>
          <Button
            className={activeTab === "bratislava" ? "activeBa" : "normal"}
            id="bratislava"
            onClick={() => {
              click("ba", "bratislava");
            }}
          >
            Bratislava
          </Button>
          <Button
            className={activeTab === "trencin" ? "activeTc" : "normal"}
            id="trencin"
            onClick={() => {
              click("tc", "trencin");
            }}
          >
            Trencin
          </Button>
          <Button
            className={activeTab === "bystrica" ? "activeBb" : "normal"}
            id="bystrica"
            onClick={() => {
              click("bb", "bystrica");
            }}
          >
            Banska
          </Button>
          <Button
            className={activeTab === "presov" ? "activePo" : "normal"}
            id="presov"
            onClick={() => {
              click("po", "presov");
            }}
          >
            Presov
          </Button>
          <Button
            className={activeTab === "kosice" ? "activeKe" : "normal"}
            id="kosice"
            onClick={() => {
              click("ke", "kosice");
            }}
          >
            Kosice
          </Button>
          <Button
            className={activeTab === "nitra" ? "activeNi" : "normal"}
            id="nitra"
            onClick={() => {
              click("ni", "nitra");
            }}
          >
            Nitra
          </Button>
          <Button
            className={activeTab === "zilina" ? "activeZi" : "normal"}
            id="zilina"
            onClick={() => {
              click("zi", "zilina");
            }}
          >
            Zilina
          </Button>
        {/* </ButtonGroup> */}
      </div>
      <HttpGet county={currentRegion} />

      {/* <Switch>
        <Route exact path="/ba">
          <HttpGet county="ba"/>
        </Route>
        <Route exact path="/ta">
          <HttpGet county="ta" />
        </Route>
        <Route exact path="/tc">
        <HttpGet county="tc" />
        </Route>
        <Route exact path="/ni">
        <HttpGet county="ni" />
        </Route>
        <Route exact path="/zi">
        <HttpGet county="zi" />
        </Route>
        <Route exact path="/bb">
        <HttpGet county="bb" />
        </Route>
        <Route exact path="/po">
        <HttpGet county="po" />
        </Route>
        <Route exact path="/ke">
        <HttpGet county="ke" />
        </Route>
        <Route exact path="/about">
          <div className="about"></div>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
