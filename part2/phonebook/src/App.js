import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
    };
    if (persons.some((p, i) => p.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  const addName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name : <input value={newName} onChange={addName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p, i) => (
        <p key={i}>{p.name}</p>
      ))}
    </div>
  );
};

export default App;
