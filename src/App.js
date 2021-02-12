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
  // Pour éviter de repasser à l'état initial de userToken, on initilaise useState à la valeur du cookie s'il existe.
  // Ça permettra à l'utilisateur de rester connecter à un refresh d'une page.
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

  const [search, setSearch] = useState("");

  // Initialisation des routes
  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        search={search}
        setSearch={setSearch}
      />
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
          <Home search={search} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
