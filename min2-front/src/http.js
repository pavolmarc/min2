import axios from "axios";
import Plotly from "plotly.js-dist";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

const HttpGet = (county) => {
  const [jsonData, setJsonData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [region, setRegion] = useState();
  const [countyState, setCountyState] = useState(county);
  const [showingAttribute, setShowingAttribute] = useState("confirmed_covid");
  const [color, setColor] = useState("blue");
  const [title, setTitle] = useState("Klikni na kraj");
  const [update, setUpdate] = useState("Loading...");
  const [sum, setSum] = useState(0);
  const [median, setMedian] = useState(0);
  const [actualState, setActualState] = useState(0);

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
      let sum = 0;
      let array = [];
      for (let index = 0; index < 54; index++) {
        if (showingAttribute === "confirmed_covid") {
          if (jsonData.page[index].region_id === region) {
            array[index] = jsonData.page[index].confirmed_covid;
            sum += jsonData.page[index].confirmed_covid;
          }
        } else if (showingAttribute === "ventilated_covid") {
          if (jsonData.page[index].region_id === region) {
            array[index] = jsonData.page[index].ventilated_covid;
            sum += jsonData.page[index].ventilated_covid;
          }
        } else if (showingAttribute === "non_covid") {
          if (jsonData.page[index].region_id === region) {
            array[index] = jsonData.page[index].non_covid;
            sum += jsonData.page[index].non_covid;
          }
        }
      }
      array.sort(function (a, b) {
        return a - b;
      });
      setMedian(array[3]);
      setSum(Math.floor(sum / 7));

      let GraphMap = new Map();
      jsonData.page.map((key) => {
        var keyName = key.newest_reported_at.split(" ")[0];
        var keyValue = 0;
        switch (showingAttribute) {
          case "confirmed_covid":
            keyValue = key.confirmed_covid;
            break;
          case "ventilated_covid":
            keyValue = key.ventilated_covid;
            break;
          case "non_covid":
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

      for (let i = 0; i < 7; i++) {
        if (jsonData.page[i].region_id === region) {
          setActualState(
            <div>
              Posledný stav nemocnice
              <br></br>({jsonData.page[0].newest_reported_at}):
              <br></br>
              {showingAttribute === "confirmed_covid" && (
                <div>
                  Potvrdený covid pacienti:
                  <br></br>
                  <b> {jsonData.page[i].confirmed_covid}</b>
                  <br></br>
                </div>
              )}
              {showingAttribute === "ventilated_covid" && (
                <div>
                  Pacienti na ventilácii:
                  <br></br>
                  <b> {jsonData.page[i].ventilated_covid}</b>
                  <br></br>
                </div>
              )}
              {showingAttribute === "non_covid" && (
                <div>
                  Non-covid pacienti: 
                  <br></br>
                  <b>{jsonData.page[i].non_covid}</b>
                  <br></br>
                </div>
              )}
            </div>
          );
        }
      }
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
            className={
              showingAttribute === "confirmed_covid" ? "active" : "nonActive"
            }
            onClick={() => {
              setShowingAttribute("confirmed_covid");
            }}
          >
            Confirmed-covid
          </Button>
          <Button
            className={
              showingAttribute === "non_covid" ? "active" : "nonActive"
            }
            onClick={() => {
              setShowingAttribute("non_covid");
            }}
          >
            Non-covid
          </Button>
          <Button
            className={
              showingAttribute === "ventilated_covid" ? "active" : "nonActive"
            }
            onClick={() => {
              setShowingAttribute("ventilated_covid");
            }}
          >
            Ventilated-covid
          </Button>
        </ButtonGroup>
      </div>
      <h1>{title}</h1>
      <div className="twoColumns">
        <div className="leftColumn">
          <h2>Aktuálne informácie</h2>
          {isLoaded && actualState}7 dňový priemer:
          <br></br>
          <b>{sum}</b>
          <br></br>
          Kĺzavý medián (7 dní):
          <br></br> <b>{median}</b> <br></br>
        </div>
        <div className="rightColumn">
          <div className={county.county} id={county.county}></div>
        </div>
      </div>
    </div>
  );
};
export default HttpGet;
