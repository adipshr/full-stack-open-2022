import React from "react";

export default function Persons({ filtredNames }) {
  return (
    <>
      {filtredNames.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </>
  );
}
