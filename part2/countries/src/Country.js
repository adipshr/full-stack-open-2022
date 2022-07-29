import React from "react";
import { useState } from "react";

import DisplayCountry from "./DisplayCountry";

export default function Country({ filteredCountries }) {
  const [show, setShow] = useState(false);

  return (
    <li>
      <p>{filteredCountries.name.common}</p>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <DisplayCountry country={filteredCountries} />}
    </li>
  );
}
