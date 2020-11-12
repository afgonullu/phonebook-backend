const express = require("express")
const { persons } = require("./phonebook")
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

app.get("/info", (req, res) => {
  res.send(`<div><p>${info[0]}</p><p>${info[1]}</p></div>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
