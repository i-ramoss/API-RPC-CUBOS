const express = require("express")
const routes = require("./routes")

const server = express()

server.use(express.json())
server.use(routes)


server.listen(5000, () => {
  console.log("The server is running successfully on port 5000")
})