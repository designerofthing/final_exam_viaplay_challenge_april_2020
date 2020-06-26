import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
        );
        setSeries(
          response.data._embedded["viaplay:blocks"][0]._embedded[
            "viaplay:products"
          ]
        );
      } catch (error) {
        console.log(error);
      }
    };
    getShows();
  }, []);

  let tvShow = series.map((show) => {
    return (
      <div className="display-show">
        <img
          src={show.content.images.landscape.url}
          alt={show.content.series.title}
        />
      </div>
    );
  });

  return (
    <div>
      <header id="header">
        <img
          id="logo"
          src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
          alt="logo"
        />
      </header>
      <div id="main-container">{tvShow}</div>
      <footer id="footer" />
    </div>
  );
};

export default App;
