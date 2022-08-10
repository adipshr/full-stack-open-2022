const express = require("express");
const app = express();
const port = 3000;

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 5,
    name: "Test",
    number: "123"
  }
];

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/info", (req, res) =>
  res.send(`<p>Phonebook has info for ${persons.length}people</p><br>${Date()}`)
);

app.get("/api/persons", (req, res) => res.json(persons));

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    res.send(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req,res) => {
  const id = Number(req.params.id);
  persons = persons.filter( p => p.id != id)
  res.status(204).end()
})


app.listen(port, () => console.log(`Server running on port ${port}!`));
