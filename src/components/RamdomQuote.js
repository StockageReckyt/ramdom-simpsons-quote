import React from "react";

function RamdomQuote({ george }) {
  return (
    <div>
      <img src={george.image} alt={george.character} />
      <ul>
        <li>Quote: {george.quote}</li>
        <li>Name: {george.character}</li>
      </ul>
    </div>
  );
}

export default RamdomQuote;
