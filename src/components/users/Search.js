import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../Context/github/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something...", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        ></input>
        {githubContext.users.length > 0 ? (
          <button
            className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear Data
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
