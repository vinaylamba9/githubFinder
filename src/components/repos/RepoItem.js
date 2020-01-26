import React from "react";
import Repos from "./Repos";

function RepoItem({ repo }) {
  return (
    <div className="card">
      <h4>
        <a href={repo.html_url}>{repo.name}</a>
      </h4>
    </div>
  );
}

export default RepoItem;
