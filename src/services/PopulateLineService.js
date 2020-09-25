function populateLineService(rows, users) {
  const fillRow = rows.map((id, index) => {
    const { name, gender, email } = users.find(findUser => findUser.id === id)
      
    return {
      name,
      gender,
      email,
      position: index+1
    }
  }) 

  return fillRow
}

module.exports = populateLineService