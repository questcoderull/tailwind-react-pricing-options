import React from "react";

const Link = ({ rout }) => {
  return (
    <li className="lg:mr-10 px-4 hover:bg-amber-500">
      <a href={rout.path}>{rout.name}</a>
    </li>
  );
};

export default Link;
