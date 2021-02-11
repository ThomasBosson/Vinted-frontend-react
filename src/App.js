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
  // Initialisation de la fonction qui va nous permettre de créer, lire et faire expirer des cookies (login)
  // Elle va permettre de modifier des états en fonction des actions utilisateurs grâce aux tokens.
  // Mémoriser des informations et faciliter la navigation.

  const [userToken, setUserToken] = useState();
  const setUser = (token) => {
    if (token) {
      // Création d'un cookie
      Cookies.set("userToken", token, { expires: 7 });
      // Mise à jour du token
      setUserToken(token);
    } else {
      // Supprimer le cookie quand l'utilisateur se déconnecte
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
