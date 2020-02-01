import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import Alert from "../layout/Alert";

export const Home = () => (
  <Fragment>
    <Alert></Alert>
    <Search></Search>
    <Users></Users>
  </Fragment>
);
