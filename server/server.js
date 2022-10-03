const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
const app = express()
app.use(bodyParser.json())

// app.get("/api", (req, res) => {
//   res.json({"names": ["countryName", "cityName"]})
// })

// app.listen(5000, () => {
//   console.log(`My app listening on port 5000`)
// })

var corOptions = {
  origin: "http://localhost:3000"
};
app.use(cors({origin: "*",}))
app.use(cors(corOptions))
app.get("/", (req, res) => {
  console.log(JSON.stringify(req.body))
  res.json({"users": ["name", "email", "password"]})
})
app.post("/api", (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(5000, () => {
  console.log(`My app listening on port 5000`)
})