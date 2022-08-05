import React from "react";

export default function Persons({ filtredNames, handleDelete }) {
  return (
    <>
      {filtredNames.map((p) => (
        <>
          <p key={p.id}>
            {p.name} {p.number}
          </p>
          <button
            onClick={() => {
              handleDelete(p.id);
            }}
          >
            delete
          </button>
        </>
      ))}
    </>
  );
}
