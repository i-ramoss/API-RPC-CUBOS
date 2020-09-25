const { v4: uuidv4 } = require("uuid")

function createUserService(users, { name, email, gender }) {
  if (!name || !email || !gender) throw new Error("Preencha todos os campos!")
 
  const lowerEmail = email.toLowerCase()
  const existEmail = users.some(user => user.email === lowerEmail)

  if (existEmail) throw new Error("Este email já está cadastrado!")

  const newUser = {
    id: uuidv4(),
    name,
    email: lowerEmail,
    gender: gender.toLowerCase()
  } 

  users.push(newUser)

  return newUser
}

module.exports = createUserService