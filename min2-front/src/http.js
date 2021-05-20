import axios from "axios";
import Plotly from "plotly.js-dist";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState, useEffect } from "react";

const HttpGet = (county) => {
  const [jsonData, setJsonData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [region, setRegion] = useState();
  const [countyState, setCountyState] = useState(county);
  const [showingAttribute, setShowingAttribute] = useState("confirmed");
  const [color, setColor] = useState("blue");
  const [title, setTitle] = useState("Klikni na kraj");

  if (countyState !== county) {
    setCountyState(county);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/graph").then((res) => {
      setIsLoaded(true);
      setJsonData(res.data);
    });

    switch (county.county) {
      case "ba":
        setRegion(3);
        setColor("#FFDD6E");
        setTitle("Bratislavský kraj");
        break;
      case "ta":
        setRegion(7);
        setTitle("Trnavský kraj");
        setColor("#FF9A58");
        break;
      case "tc":
        setRegion(4);
        setTitle("Trenčianský kraj");
        setColor("#FF5959");
        break;
      case "ni":
        setRegion(2);
        setTitle("Nitrianský kraj");
        setColor("#FF78CA");
        break;
      case "zi":
        setRegion(5);
        setTitle("Žilinský kraj");
        setColor("#DA74FF");

        break;
      case "bb":
        setRegion(6);
        setColor("#76D2FF");
        setTitle("Banskobystrický kraj");
        break;
      case "po":
        setRegion(8);
        setColor("#768EFF");
        setTitle("Prešovský kraj");
        break;
      case "ke":
        setRegion(1);
        setTitle("Košický kraj");
        setColor("#76D46A");
        break;
    }
  }, [countyState]);

  useEffect(() => {
    if (isLoaded) {
      let GraphMap = new Map();
      jsonData.page.map((key) => {
        var keyName = key.newest_reported_at.split(" ")[0];
        var keyValue = 0;
        switch (showingAttribute) {
          case "confirmed":
            keyValue = key.confirmed_covid;
            break;
          case "ventilated":
            keyValue = key.ventilated_covid;
            break;
          case "non":
            keyValue = key.non_covid;
            break;
        }

        if (key.region_id === region) {
          if (GraphMap.has(keyName)) {
            GraphMap.set(keyName, GraphMap.get(keyName) + keyValue);
          } else {
            GraphMap.set(keyName, keyValue);
          }
        }
      });

      var data = [
        {
          x: Array.from(GraphMap.keys()),
          y: Array.from(GraphMap.values()),
          type: "bar",
          marker: {
            color: color,
          },
        },
      ];
      var layout = {
        plot_bgcolor: "rgb(255, 255, 255)",
        paper_bgcolor: "rgb(255, 255, 255)",
        font: {
          color: "black",
          size: 10,
        },
      };
      Plotly.newPlot(county.county, data, layout);
    }
  }, [jsonData, showingAttribute]);

  return (
    <div>
      <div className="differentMenu">
        <ButtonGroup
          fullWidth="true"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
        <Button
          className={showingAttribute === "confirmed" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("confirmed");
          }}
        >
          Confirmed-covid
        </Button>
        <Button
          className={showingAttribute === "non" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("non");
          }}
        >
          Non-covid
        </Button>
        <Button
          className={showingAttribute === "ventilated" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("ventilated");
          }}
        >
          Ventilated-covid
        </Button>
      </ButtonGroup>
      </div>
      <h1>{title}</h1>
      <div className="twoColumns">
        <div className="leftColumn">
          <h1>Hi</h1>
        </div>
        <div className="rightColumn">
          <div className={county.county} id={county.county}></div>
        </div>
      </div>
    </div>
  );
};
export default HttpGet;
