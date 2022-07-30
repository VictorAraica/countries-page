import React from "react";

export default function BorderCountry({ country }) {
  return (
    <span className="py-0.5 px-5 dark:text-very-light-gray  dark:bg-dark-blue rounded ">
      {country}
    </span>
  );
}
