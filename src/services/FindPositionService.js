function findPositionService (rows, users, email) {
  const user = users.find(user => user.email === email)

  if(!user) throw new Error("O usuário não foi encontrado!")

  const index = rows.findIndex(item => item === user.id) 

  if (index === -1) throw new Error("O usuário não está cadastrado na fila")

  return index+1
}

module.exports = findPositionService  