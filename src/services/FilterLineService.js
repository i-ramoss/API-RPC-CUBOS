const populateLineService = require("../services/PopulateLineService")

function filterLineService(rows, users, gender) {
  const fillRow = populateLineService(rows, users)
  const filteredGender = fillRow.filter(user => user.gender === gender.toLowerCase())

  return filteredGender
}

module.exports = filterLineService