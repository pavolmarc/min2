import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import HttpGet from "./http.js";

function App() {
  const [currentRegion, setCurrentRegion] = useState("ba");

  const click = (region) => {
    setCurrentRegion(region);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          click("ta");
        }}
      >
        Trnava
      </button>
      <button
        onClick={() => {
          click("ba");
        }}
      >
        Bratislava
      </button>
      <button
        onClick={() => {
          click("tc");
        }}
      >
        Trencin
      </button>
      <button
        onClick={() => {
          click("bb");
        }}
      >
        Banska
      </button>
      <button
        onClick={() => {
          click("po");
        }}
      >
        Presov
      </button>
      <button
        onClick={() => {
          click("ke");
        }}
      >
        Kosice
      </button>
      <button
        onClick={() => {
          click("ni");
        }}
      >
        Nitra
      </button>
      <button
        onClick={() => {
          click("zi");
        }}
      >
        Zilina
      </button>
      <HttpGet county={currentRegion} />
      {/* <Navigation /> */}
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
