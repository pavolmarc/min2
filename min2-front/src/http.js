import axios from "axios";
import Plotly from "plotly.js-dist";
import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

const HttpGet = (county) => {
  const [data, setData] = useState({ jason: "krason" });
  const [jsonData, setJsonData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [region, setRegion] = useState();
  const [countyState, setCountyState] = useState(county);

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
        var keyValue = key.newest_reported_at;
        if (key.region_id === region) {
          if (GraphMap.has(keyValue)) {
            GraphMap.set(
              keyValue,
              GraphMap.get(keyValue) + key.confirmed_covid
            );
          } else {
            GraphMap.set(keyValue, key.confirmed_covid);
          }
        }
      });

      var data = [
        {
          x: Array.from(GraphMap.keys()),
          y: Array.from(GraphMap.values()),
          type: "bar",
        },
      ];

      Plotly.newPlot(county.county, data);
    }
  }, [jsonData]);

  return (
    <div>
      <div className={county.county} id={county.county}></div>
      {/* <div id={county}></div> */}
      <ReactJson src={data} name="http-test" collapsed={1} />
    </div>
  );
};
export default HttpGet;
