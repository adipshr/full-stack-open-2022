import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtredNames, setFiltredNames] = useState(persons);

  const filterName = (event) => {
    let toSearch = event.target.value;
    const searchedNames = persons.filter((p) =>
      p.name.toLowerCase().includes(toSearch.toLowerCase())
    );
    setFiltredNames(searchedNames);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((p) => p.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
      setNewName("");
      return;
    }

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
    setFiltredNames(persons.concat(newPerson));
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
      <Filter text={"filter shown with"} filterName={filterName} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        addName={addName}
        newNumber={newNumber}
        addNumber={addNumber}
      />
      <h2>Numbers</h2>
      <Persons filtredNames={filtredNames} />
    </div>
  );
};

export default App;
