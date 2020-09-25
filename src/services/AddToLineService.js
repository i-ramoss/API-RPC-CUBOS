function addToLineService (rows, users, id) {
  const existId = rows.some(item => item === id)
  const existUser = users.some(user => user.id === id)

  if(!existUser) throw new Error("O usuário não foi encontrado!")
 
  if(existId) throw new Error( "O usuário já foi cadastrado na fila!")

  rows.push(id)

  const index = rows.findIndex(item => item === id)

  return index+1 
}

module.exports = addToLineService


