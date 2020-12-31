import React from "react";
import PokemonColorUtil from "../Util/PokemonColorUtil";

const ProgressBar = (props) => {
  const { completed, value, type } = props;

  let bg = PokemonColorUtil(type);

  return (
    <div className="w-full">
      <div className="shadow w-full bg-gray-100 rounded-full">
        <div
          className={`${bg} text-xs text-right px-2 text-white py-1.5 leading-none rounded-full`}
          style={{ width: completed + "%" }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
