import "../App.css";
import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from "react";

function Navigation({ click, activeTab }) {
  return (
    <div>
      <ul class="topnav">
        <ButtonGroup
          fullWidth="true"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            to="/ta"
            component={NavLink}
            className={activeTab === "trnava" ? "activeTa" : "normal"}
            id="trnava"
            onClick={() => {
              click("ta", "trnava");
            }}
          >
            Trnavský
          </Button>
          <Button
            to="/ba"
            component={NavLink}
            className={activeTab === "bratislava" ? "activeBa" : "normal"}
            id="bratislava"
            onClick={() => {
              click("ba", "bratislava");
            }}
          >
            Bratislavský
          </Button>
          <Button
            to="/tc"
            component={NavLink}
            className={activeTab === "trencin" ? "activeTc" : "normal"}
            id="trencin"
            onClick={() => {
              click("tc", "trencin");
            }}
          >
            Trenčiansky
          </Button>
          <Button
            to="/bb"
            component={NavLink}
            className={activeTab === "bystrica" ? "activeBb" : "normal"}
            id="bystrica"
            onClick={() => {
              click("bb", "bystrica");
            }}
          >
            Banskobystrický
          </Button>
          <Button
            to="/po"
            component={NavLink}
            className={activeTab === "presov" ? "activePo" : "normal"}
            id="presov"
            onClick={() => {
              click("po", "presov");
            }}
          >
            Prešovský
          </Button>
          <Button
            to="/ke"
            component={NavLink}
            className={activeTab === "kosice" ? "activeKe" : "normal"}
            id="kosice"
            onClick={() => {
              click("ke", "kosice");
            }}
          >
            Košický
          </Button>
          <Button
            to="/ni"
            component={NavLink}
            className={activeTab === "nitra" ? "activeNi" : "normal"}
            id="nitra"
            onClick={() => {
              click("ni", "nitra");
            }}
          >
            Nitriansky
          </Button>
          <Button
            to="/zi"
            component={NavLink}
            className={activeTab === "zilina" ? "activeZi" : "normal"}
            id="zilina"
            onClick={() => {
              click("zi", "zilina");
            }}
          >
            Žilinský
          </Button>
        </ButtonGroup>
      </ul>
    </div>
  );
}

export default Navigation;
