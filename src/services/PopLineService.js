function popLineService(rows, users) {
  if (rows.length === 0) throw new Error("A fila já está vazia")

  const removeUserFromRow = rows.shift()
  const user = users.find(user => user.id === removeUserFromRow)

  return user
}

module.exports = popLineService