import { useState } from "react";
import "./App.css";
import logo from './Images/logo.png'
import HttpGet from "./http.js";

function App() {
  const [currentRegion, setCurrentRegion] = useState("ba");
  const [activeTab, setActiveTab] = useState("bratislava");
 
  const click = (region, id) => {
    setActiveTab(id);
    setCurrentRegion(region);
  };

  return (
    <div className="App">
      <div className="topnav">
      <img className="logo" src={logo} alt="logo"/>
      <button
        className={activeTab === "trnava" ? "activeTa" : "normal"}
        id="trnava"
        onClick={() => {
          click("ta", "trnava");
        }}
      >
        Trnava
      </button>
      <button
        className={activeTab === "bratislava" ? "activeBa" : "normal"}
        id="bratislava"
        onClick={() => {
          click("ba", "bratislava");
        }}
      >
        Bratislava
      </button>
      <button
        className={activeTab === "trencin" ? "activeTc" : "normal"}
        id="trencin"
        onClick={() => {
          click("tc", "trencin");
        }}
      >
        Trencin
      </button>
      <button
        className={activeTab === "bystrica" ? "activeBb" : "normal"}
        id="bystrica"
        onClick={() => {
          click("bb", "bystrica");
        }}
      >
        Banska
      </button>
      <button
        className={activeTab === "presov" ? "activePo" : "normal"}
        id="presov"
        onClick={() => {
          click("po", "presov");
        }}
      >
        Presov
      </button>
      <button
        className={activeTab === "kosice" ? "activeKe" : "normal"}
        id="kosice"
        onClick={() => {
          click("ke", "kosice");
        }}
      >
        Kosice
      </button>
      <button
        className={activeTab === "nitra" ? "activeNi" : "normal"}
        id="nitra"
        onClick={() => {
          click("ni", "nitra");
        }}
      >
        Nitra
      </button>
      <button
        className={activeTab === "zilina" ? "activeZi" : "normal"}
        id="zilina"
        onClick={() => {
          click("zi", "zilina");
        }}
      >
        Zilina
      </button>
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
