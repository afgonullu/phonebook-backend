const express = require("express")
let { persons } = require("./phonebook")
const app = express()

app.use(express.json())

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

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)

  const person = persons.find((person) => person.id === id)

  if (!person) {
    res.status(404).send(`<p>no person with id: ${id}. Request to delete unsuccessful.</p>`)
  } else {
    persons = persons.filter(person => person.id != id)
    res.status(204).send(`<div><p>Following person is deleted</p><p>${person}</p></div>`)
  }
})

app.post("/api/persons", (req, res) => {
  if(!req.body.name) {
    res.send("you must provide a name").end()
  }

  const newPerson = {
    name: req.body.name,
    number: Number(req.body.number) | 0,
    id: Math.floor(Math.random()*10000000),
  }

  persons.push(newPerson)

  res.status(200).send(`person is created with id ${newPerson.id}`)

})

app.get("/info", (req, res) => {
  res.send(`<div><p>${info[0]}</p><p>${info[1]}</p></div>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
