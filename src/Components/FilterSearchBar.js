import React from "react";

export default function FilterSearchBar(props) {
  return (
    <div>
      <div className="p-4 bg-gray-200 mb-2 shadow-sm">
        <div className="bg-white flex items-center rounded-full">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search Name or ID"
            onChange={props.onSearchQueryChange}
          ></input>
          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
}
