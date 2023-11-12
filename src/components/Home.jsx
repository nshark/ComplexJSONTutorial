import React, { useState } from "react";
import { useEffect } from "react";
import Colors from "./Colors";
import axios from "axios";
export default function Home() {
  const [Data, setData] = useState({
    Company: "",
    Description: "",
  });
  const [colorsData, setColorsData] = useState([{"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"}]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/unknown")
      .then((res) => {
        setData({
          Company: "StatusCode Weekly",
          Description:
            "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things",
        });
        setColorsData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>{Data.Company}</h1>
      <p>{Data.Description}</p>
      <Colors data={colorsData} />
    </>
  );
}
