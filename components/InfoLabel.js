import React from "react";

export default function InfoLabel({ name, info }) {
  return (
    <h4 className="text-sm dark:text-very-light-gray">
      <span className="font-semibold dark:text-white">{name}:</span> {info}
    </h4>
  );
}
