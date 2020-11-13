const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
let { persons } = require("./phonebook")
const app = express()

morgan.token("data", (req, res) => JSON.stringify(req.body))

app.use(express.static("build"))
app.use(cors())
app.use(express.json())
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
)

//data extraction
const length = persons.length

const date = new Date().toString()

const info = [`Phonebook has info for ${length} people.`, date]

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)

  const person = persons.find((person) => person.id === id)

  if (!person) {
    res.status(404).send(`<p>no person with id: ${id}</p>`)
  } else {
    res.json(person)
  }
})

// status code 204 doesn't allow sending a message or a json. therefore set statuscode 200
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)

  const person = persons.find((person) => person.id === id)

  if (!person) {
    res
      .status(404)
      .send(`<p>no person with id: ${id}. Request to delete unsuccessful.</p>`)
  } else {
    persons = persons.filter((person) => person.id != id)
    res
      .status(200)
      .send(`<div><p>Following person is deleted</p><p>${person}</p></div>`)
  }
})

// status code 204 doesn't allow sending a message or a json. therefore set statuscode 200
app.post("/api/persons", (req, res) => {
  if (!req.body.name) {
    return res.status(200).json({ error: "you must provide a name" })
  }

  const regex = /^[A-z ]+$/
  if (!regex.test(req.body.name)) {
    return res.status(200).json({ error: "name can only have letters." })
  }

  if (!req.body.number) {
    return res.status(200).json({ error: "you must provide a number" })
  }

  if (!persons.every((person) => person.name != req.body.name)) {
    return res
      .status(200)
      .json({ error: "the name you entered is already in the phonebook" })
  }

  const newPerson = {
    name: req.body.name,
    number: Number(req.body.number) | 0,
    id: Math.floor(Math.random() * 10000000),
  }

  persons.push(newPerson)

  return res.status(200).send(`person is created with id ${newPerson.id}`)
})

app.get("/info", (req, res) => {
  res.send(`<div><p>${info[0]}</p><p>${info[1]}</p></div>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
