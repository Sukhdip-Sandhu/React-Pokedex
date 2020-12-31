import axios from "axios";

import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import FilterSearchBar from "./FilterSearchBar";

export default function PokemonList() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          pokemon.url.split("/")[6].includes(search)
      )
    );
  }, [search, pokemonList]);

  function handleSearchQueryChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <FilterSearchBar onSearchQueryChange={handleSearchQueryChange} />
      <div className="flex flex-wrap justify-center">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index}>
            <Pokemon name={pokemon.name} url={pokemon.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
