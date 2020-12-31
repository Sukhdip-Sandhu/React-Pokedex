import React from "react";

export default function Pokemon(props) {
  function urlToID(url) {
    return url.split("/")[6];
  }

  return (
    <div className="rounded overflow-hidden shadow-md px-4 py-4 m-2 hover:shadow-xl bg-white cursor-pointer">
      <div className="font-light text-right text-gray-500">
        #{urlToID(props.url)}
      </div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlToID(
          props.url
        )}.png`}
        alt={props.name}
      />
      <div className="text-center">
        <div className="font-bold capitalize text-gray-700">{props.name}</div>
      </div>
    </div>
  );
}
