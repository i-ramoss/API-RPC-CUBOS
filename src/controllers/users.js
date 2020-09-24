let users = []
let rows = []
let id = 0

exports.createUser = (request, response) => {
  const usersLength = users.length
  const { name, email, gender } = request.body
  
  if (!name || !email || !gender) return response.status(400).json({error: "Preencha todos os campos!"})
 
  if (usersLength >= 0) id++

  const lowerEmail = email.toLowerCase()
  const existEmail = users.some(user => user.email == lowerEmail)

  if (existEmail) return response.status(400).json({error: "Esse email já foi cadastrado!"})

  const newUser = {
    id,
    name,
    email: lowerEmail,
    gender: gender.toLowerCase()
  } 

  users.push(newUser)

  return response.json(newUser)
} 

exports.addToLine = (request, response) => { 
  const { id } = request.body
  const existId = rows.some(item => item == id)
  const existUser = users.some(item => item.id== id)

  if(!existUser) return response.status(400).json({error: "O usuário não foi encontrado!"})
 
  if(existId) return response.status(400).json({error: "O usuário já foi cadastrado na fila!"})

  rows.push(Number(id))

  const index = rows.findIndex(item => item == id)
  
  return response.json({position: index+1}) 
}

exports.findPosition = (request, response) => {
  const { email } = request.params
  const user = users.find(user => user.email == email)

  if(!user) return response.status(400).json({error: "O usuário não foi encontrado!"})

  const index = rows.findIndex(item => item == user.id) 

  if (index == -1) return response.status(400).json({error: "O usuário não está cadastrado na fila"})

  return response.json({position: index+1})
}

exports.showLine = (request, response) => {
  const fillRow = rows.map((id, index) => {
    const { name, gender, email } = users.find(findUser => findUser.id == id)
      
    return {
      name,
      gender,
      email,
      position: index+1
    }
  }) 

  return response.json(fillRow)
}  

exports.filterLine = (request, response) => {
  const { gender } = request.params
  const fillRow = rows.map((id, index) => {
    const { name, gender, email } = users.find(findUser => findUser.id == id)

    return {
      name,
      gender,
      email,
      position: index+1
    }
  })

  const filteredGender = fillRow.filter(user => user.gender == gender.toLowerCase())
  
  return response.json(filteredGender)
}

exports.popLine = (request, response) => {
  if (rows.length == 0) return response.json({error: "A fila já está vazia"})

  const removeUserFromRow = rows.shift()
  const { name, gender, email } = users.find(user => user.id == removeUserFromRow)
  
  return response.json({name, gender, email})
} 