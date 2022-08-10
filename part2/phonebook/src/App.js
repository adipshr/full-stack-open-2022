import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/person";
import Notification from "./Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtredNames, setFiltredNames] = useState(persons);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.filter((p) => p.name === newPerson.name);

        personService.update(person[0].id, newPerson).then((returnedPerson) => {
          setSuccessMessage(`Phone number for ${returnedPerson.name} updated`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
          setPersons(
            persons.map((p) =>
              p.id !== returnedPerson.id ? p : returnedPerson
            )
          );
          setFiltredNames(
            persons.map((p) =>
              p.id !== returnedPerson.id ? p : returnedPerson
            )
          );
        });
        setNewName("");
      }
      return;
    }

    personService.create(newPerson).then((returnedPerson) => {
      setSuccessMessage(`${returnedPerson.name} Added`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
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
      personService.remove(id).catch((error) => {
        console.log("Error occured", error);
        setErrorMessage(
          `Information of ${personName} has already been removed from the server `
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setPersons(persons.filter((p) => p.id !== id));
        setFiltredNames(persons.filter((p) => p.id !== id));
      });
      setPersons(persons.filter((p) => p.id !== id));
      setFiltredNames(persons.filter((p) => p.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <Filter text={"filter shown with"} filterName={filterName} />
      <h2>Add a new contact</h2>
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
