import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtredNames, setFiltredNames] = useState(persons);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setFiltredNames(initialPersons);
    });
  }, []);

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

    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setFiltredNames(persons.concat(returnedPerson));
    });

    setNewName("");
    setNewNumber("");
  };

  const addName = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDelete = (id) => {
    const personName = persons.find((p) => p.id === id).name;
    if (window.confirm(`Delete ${personName} ?`)) {
      personService.remove(id);
      setPersons(persons.filter((p) => p.id !== id));
      setFiltredNames(persons.filter((p) => p.id !== id));
    }
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
      <Persons filtredNames={filtredNames} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
