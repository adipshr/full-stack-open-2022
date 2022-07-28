import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((p, i) => p.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const addName = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name : <input value={newName} onChange={addName} />
          <div>
            number: <input value={newNumber} onChange={addNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p, i) => (
        <p key={i}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
