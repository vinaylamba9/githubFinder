import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>);
}

export default Repos;
