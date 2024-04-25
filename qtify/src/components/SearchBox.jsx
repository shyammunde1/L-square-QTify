import React from "react";
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg"
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <form className="container">
      <input className="search" placeholder=""></input>
      <button className="search_icon" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;