import React from "react";

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="flex content-center items-center w-full md:w-2/5 bg-white dark:bg-dark-blue py-4 px-7 rounded-md">
      <span className="material-symbols-outlined bg-red">search</span>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full bg-transparent ml-7 outline-none text-sm"
        placeholder="Search for a country..."
      />
    </div>
  );
}
