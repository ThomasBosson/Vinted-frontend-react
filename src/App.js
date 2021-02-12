import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";
library.add();

function App() {
  // Initialisation de la fonction qui va nous permettre de créer, lire et faire expirer des cookies

  // useState contient la valeur du cookie utilisateur pour garder cet état lors d'un refresh ou autres manipulations
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    // Au login, si le token utilisateur existe...
    if (token) {
      // Création d'un cookie pour stocker son token
      Cookies.set("userToken", token, { expires: 7 });
      // Mise à jour du token
      setUserToken(token);
    } else {
      // A la déconnection, supprimer le cookie de l'utilisateur
      Cookies.remove("userToken");
      // Mise à jour du token
      setUserToken(null);
    }
  };

  // Initialisation des routes
  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
