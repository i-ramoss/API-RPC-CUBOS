const createUserService = require("../services/CreateUserServices")
const addToLineService = require("../services/AddToLineService")
const findPositionService = require("../services/FindPositionService")
const filterLineService = require("../services/FilterLineService")
const popLineService = require("../services/PopLineService")

const populateLineService = require("../services/PopulateLineService")

const users = []
const rows = []

exports.createUser = (request, response) => {
  const { name, email, gender } = request.body
  const newUser = createUserService(users, { name, email, gender })

  return response.json(newUser)
} 

exports.addToLine = (request, response) => { 
  const { id } = request.body
  const position = addToLineService(rows, users, id)
  
  return response.json({ position }) 
}

exports.findPosition = (request, response) => {
  const { email } = request.params
  const position = findPositionService(rows, users, email)

  return response.json({position})
}

exports.showLine = (request, response) => {
  const fillRow = populateLineService(rows, users)

  return response.json(fillRow)
}  

exports.filterLine = (request, response) => {
  const { gender } = request.params
  const filteredGender = filterLineService(rows, users, gender)
  
  return response.json(filteredGender)
}

exports.popLine = (request, response) => {
  const del = popLineService(rows, users)
  
  return response.json(del)
}