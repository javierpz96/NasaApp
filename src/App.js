import "./App.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/CardComponent";

import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState({});

  const [cargando, setCargando] = useState(true);

  console.log(data);

  useEffect(() => {
    axios(
      "https://api.nasa.gov/planetary/apod?api_key=b2gCanMkPiFDScVDjxftG1XL84dqHZL8Y4ICB9C9"
    ).then((res) => setData(res.data));
    setTimeout(() => {
      setCargando(false)
    }, 2500);
    ;
  }, []);

  return (
    <div className="App">
      <Header />
      {cargando ? <Spinner /> : <CardComponent data={data} />}
    </div>
  );
}

export default App;

