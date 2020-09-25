const express = require("express")
const routes = require("./routes")

const server = express()

server.use(express.json())
server.use(routes)
server.use( (error, request, response, next) => {
  return response.status(400).json({error: error.message})
}) 


server.listen(5000, () => {
  console.log("The server is running successfully on port 5000")
})