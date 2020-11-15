require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const Person = require("./models/person")

morgan.token("data", (req, res) => JSON.stringify(req.body))

app.use(express.static("build"))
app.use(cors())
app.use(express.json())
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
)

app.get("/info", (req, res, next) => {
  Person.estimatedDocumentCount()
    .then((result) => {
      console.log(result)
      const date = new Date().toString()
      res.send(
        `<div><p>Phonebook has info for ${result} people.</p><p>${date}</p></div>`
      )
    })
    .catch((error) => next(error))
})

app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

app.get("/api/persons/:id", (req, res, next) => {
  const id = req.params.id

  Person.findById(id)
    .then((person) => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

app.delete("/api/persons/:id", (req, res, next) => {
  const id = req.params.id

  Person.findByIdAndRemove(id)
    .then((result) => res.status(204).end())
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

app.post("/api/persons", (req, res, next) => {
  console.log(req.body)

  const newPerson = new Person({
    name: req.body.name,
    number: req.body.number,
  })

  newPerson
    .save()
    .then((savedPerson) => {
      res.json(savedPerson)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

app.put("/api/persons/:id", (req, res, next) => {
  const id = req.params.id

  const person = {
    name: req.body.name,
    number: req.body.number,
  }

  Person.findByIdAndUpdate(id, person, { new: true, runValidators: true })
    .then((updatedPerson) => {
      res.json(updatedPerson)
    })
    .catch((error) => next(error))
})

app.get("/info", (req, res) => {
  res.send(`<divPhonebook><p>${info[0]}</p><p>${info[1]}</p></divPhonebook>`)
})

const errorHandler = (error, req, res, next) => {
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" })
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
