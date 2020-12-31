import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatsProgressBar from "../Components/StatsProgressBar";
import PokemonColorUtil from "../Util/PokemonColorUtil";

export default function PokemonDetails() {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemonDetails(response.data);
    });
  }, [url]);

  if (pokemonDetails) {
    let color = PokemonColorUtil(pokemonDetails.types[0].type.name);

    content = (
      <div className="text-gray-700 rounded overflow-hidden shadow-md px-4 py-4 m-2 hover:shadow-xl bg-white sm:w-3/5 mx-auto">
        <div className="w-full text-right font-light">
          <span
            className={`${color} rounded-full text-white p-2 text-right font-light`}
          >
            #{pokemonDetails.id}
          </span>
        </div>
        <img
          className="mx-auto"
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
        />
        <div className="font-bold capitalize text-center text-2xl mb-4">
          {pokemonDetails.name}
        </div>
        <div className="w-1/3 mx-auto flex justify-between mb-4">
          <div className={`${color} rounded-full text-white px-2 py-0.5`}>
            {pokemonDetails.height / 10}m
          </div>
          <div className={`${color} rounded-full text-white px-2 py-0.5`}>
            {pokemonDetails.weight / 10}kg
          </div>
        </div>
        <div className="bg-gray-50 rounded p-4">
          <div className="font-bold text-center text-lg">Stats</div>
          {pokemonDetails.stats.map((stat, index) => (
            <div className="p-0.5 m-2" key={index}>
              <span className="capitalize">{stat.stat.name}</span>
              <StatsProgressBar
                completed={stat.base_stat > 100 ? 100 : stat.base_stat}
                value={stat.base_stat}
                type={pokemonDetails.types[0].type.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}
