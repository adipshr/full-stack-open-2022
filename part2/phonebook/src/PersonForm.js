import React from "react";

export default function PersonForm({
  addPerson,
  newName,
  addName,
  newNumber,
  addNumber,
}) {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name : <input value={newName} onChange={addName} />
        <div>
          Number: <input value={newNumber} onChange={addNumber} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
