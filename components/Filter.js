import React, { useState } from "react";

export default function Filter({ setRegion, region }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cursor-pointer relative flex content-center justify-center w-48 items-center bg-white dark:bg-dark-blue py-4 text-sm px-5 rounded-md dark:text-very-light-gray"
      onClick={() => setOpen(!open)}
    >
      {region}
      <span className="material-symbols-outlined ml-5">expand_more</span>
      {open ? (
        <div className="w-full flex flex-col gap-1 absolute left-0 -bottom-3 translate-y-full px-6 py-4 rounded-md bg-white dark:bg-dark-blue">
          {regions.map((newRegion) => (
            <button
              key={newRegion}
              className="w-full text-left"
              onClick={() => setRegion(newRegion)}
            >
              {newRegion}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
