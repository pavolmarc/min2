import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactJson from 'react-json-view'

const HttpGet = () => {

  const [data, setData] = useState({"jason": "krason"});

  useEffect(() => {
    console.log("The link was clicked.");
    axios.get("http://localhost:8080/graph").then((res) => {

      var string = res.data
      // string = string.slice(0,-1)
      // string = string.slice(0,1)
      // console.log(string)
      setData(string);
    });

  }, []);

  useEffect(() => {
    console.log("DATA is" + data);
  }, [data])

  return <div><ReactJson src={data} name='http-test' collapsed={1} /></div>;
};
export default HttpGet;
