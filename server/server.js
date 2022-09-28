const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
// app.use(bodyParser.json())

app.get("/api", (req, res) => {
  res.json({"names": ["countryName", "cityName"]})
})

app.listen(5000, () => {
  console.log(`My app listening on port 5000`)
})