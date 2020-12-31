import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PokemonList from "./Components/PokemonList";
// import FilterSearchBar from "./Components/FilterSearchBar";

ReactDOM.render(
  <React.StrictMode>
    {/* <FilterSearchBar /> */}
    <PokemonList />
  </React.StrictMode>,
  document.getElementById("root")
);
