import axios from "axios";
import Plotly from "plotly.js-dist";
import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

const HttpGet = () => {
  const [data, setData] = useState({ jason: "krason" });
  const [jsonData, setJsonData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("The link was clicked.");
    axios.get("http://localhost:8080/graph").then((res) => {
      var string = res.data;
      setIsLoaded(true);
      setJsonData(res.data);
      setData(string);
    });
  }, []);

  useEffect(() => {
    
    if (isLoaded) {
      let GraphMap = new Map();

      jsonData.page.map((key) => {
        var keyValue = key.updated_at;
        if (GraphMap.has(keyValue)) {
          GraphMap.set(keyValue, GraphMap.get(keyValue) + key.ventilated_covid);
        } else {
          GraphMap.set(keyValue, key.ventilated_covid);
        }
      });

      var data = [
        {
          x:  Array.from( GraphMap.keys()),
          y:  Array.from( GraphMap.values()),
          type: 'bar'
        }
      ];

      Plotly.newPlot('myDiv', data);
    }
  }, [jsonData]);

  return (
    <div>
      <div id="myDiv"></div>
      <ReactJson src={data} name="http-test" collapsed={1} />
    </div>
  );
};
export default HttpGet;
