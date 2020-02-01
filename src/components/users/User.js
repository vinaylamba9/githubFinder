import React, { Component, Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../Context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUserRepos(match.params.login);
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner></Spinner>;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left" style={{ fontSize: "18px" }}></i>
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fa fa-check text-success"></i>
      ) : (
        <i className="fa fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          ></img>
          <h1>{name}</h1>
          <p>
            <i className="fa fa-map-marker"></i> {location}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} target="_blank" className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}{" "}
                  <a
                    href={blog}
                    target="_blank"
                    className="btn btn-light btn-sm my-1"
                  >
                    Visit <i className="fa fa-location-arrow"></i>
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <br></br>
      <h3 style={{ color: "#0000CC", textAlign: "center" }}>Last 5 Repos:</h3>
      <Repos repos={repos}></Repos>
    </Fragment>
  );
};

export default User;
