import axios from "axios";
import Plotly from "plotly.js-dist";
import React, { useState, useEffect } from "react";

const HttpGet = (county) => {
  const [data, setData] = useState({ jason: "krason" });
  const [jsonData, setJsonData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [region, setRegion] = useState();
  const [countyState, setCountyState] = useState(county);
  const [showingAttribute, setShowingAttribute] = useState("confirmed");

  if (countyState !== county) {
    setCountyState(county);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/graph").then((res) => {
      var string = res.data;
      setIsLoaded(true);
      setJsonData(res.data);
      setData(string);
    });

    switch (county.county) {
      case "ba":
        setRegion(3);
        break;
      case "ta":
        setRegion(7);
        break;
      case "tc":
        setRegion(4);
        break;
      case "ni":
        setRegion(2);
        break;
      case "zi":
        setRegion(5);
        break;
      case "bb":
        setRegion(6);
        break;
      case "po":
        setRegion(8);
        break;
      case "ke":
        setRegion(1);
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
            color: 'green'
          }
        },
      ];
      var layout = {
        plot_bgcolor: "rgb(255, 255, 255)",
        paper_bgcolor: "rgb(255, 255, 255)",
        font: {
          color: 'black',
          size: 10
        }
      };
      Plotly.newPlot(county.county, data, layout);
    }
  }, [jsonData, showingAttribute]);

  return (
    <div className={county.county}>
      <h1>{county.county}</h1>
      <div>
        <button
        className={showingAttribute === "confirmed" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("confirmed");
          }}
        >
          Confirmed-covid
        </button>
        <button
        className={showingAttribute === "non" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("non");
          }}
        >
          Non-covid
        </button>
        <button
        className={showingAttribute === "ventilated" ? "active" : "nonActive"}
          onClick={() => {
            setShowingAttribute("ventilated");
          }}
        >
          Ventilated-covid
        </button>
      </div>
      <div
        className={county.county}
        id={county.county}
      ></div>
      {/* <ReactJson src={data} name="http-test" collapsed={1} /> */}
    </div>
  );
};
export default HttpGet;
