const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

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
    number: "123",
  },
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

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((p) => p.id != id);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  const person = {
    id: Math.floor(Math.random() * 500),
    name: body.name,
    number: body.number,
  };

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  if (persons.find((p) => p.name === person.name)) {
    return res.status(404).send({ error: "Name must be unique" });
  }

  persons = persons.concat(person);
  res.send(person);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.listen(port, () => console.log(`Server running on port ${port}!`));
