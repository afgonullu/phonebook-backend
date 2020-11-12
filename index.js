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

app.get("/info", (req, res) => {
  res.send(`<div><p>${info[0]}</p><p>${info[1]}</p></div>`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
