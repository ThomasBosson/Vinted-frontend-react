import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

function App() {
  // We check if the user's token exists
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      // creation and storage of user's cookie
      Cookies.set("userToken", token, { expires: 7 });
      // Update user's token
      setUserToken(token);
    } else {
      // Delete user's cookies
      Cookies.remove("userToken");
      // Update user's token like "null"
      setUserToken(null);
    }
  };

  // State declaration for search bar and price filters
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [priceSwitch, setPriceSwitch] = useState(true);

  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        search={search}
        setSearch={setSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        priceSwitch={priceSwitch}
        setPriceSwitch={setPriceSwitch}
      />
      <Switch>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/">
          <Home
            search={search}
            priceRange={priceRange}
            priceSwitch={priceSwitch}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
