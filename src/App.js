import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import Accordion from "./Accordian/Accordion";
import GithubState from "./Context/github/GithubState";
import AlertState from "./Context/alert/alertState";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/aboutus" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
