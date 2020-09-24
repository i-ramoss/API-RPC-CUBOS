const express = require("express")
const users = require("./controllers/users")

const routes = express.Router()

routes.post("/createUser", users.createUser)
routes.post("/addToLine", users.addToLine)
routes.get("/findPosition/:email", users.findPosition)
routes.get("/showLine", users.showLine)
routes.get("/filterLine/:gender", users.filterLine)
routes.delete("/popLine", users.popLine)


module.exports = routes 