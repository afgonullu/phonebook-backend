const express = require("express")
const { persons } = require("./phonebook")
const app = express()

app.use(express.json())

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
