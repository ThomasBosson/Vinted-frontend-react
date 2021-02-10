import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";
library.add();

function App() {
  // Déclaration des states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Indique à React que nos composants doivent s'exécuter après chaque affichage
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://thomas-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // Initialisation des routes
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offer data={data} setData={data} />
        </Route>
        <Route path="/">
          <Home data={data} isLoading={isLoading} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
