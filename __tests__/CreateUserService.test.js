const createUserService = require("../src/services/CreateUserServices")

describe("CreateUserService", () => {

  it("should be able to create a new user", () => {
    const users = []
    const user = createUserService(users, {
      name: "Ian", 
      email: "ian@cubos.com",
      gender: "Male"
    })
  
    expect(users[0]).toHaveProperty("id")
    expect(user).toMatchObject(
      expect.objectContaining({name: "Ian", email: "ian@cubos.com", gender: "male"})
    )
  })

  it("shoud not be able to create a new user with same email from another", () => {
    const users = []

    createUserService(users, {
      name: "Ian", 
      email: "ian@cubos.com",
      gender: "Male"
    })

    expect(() => createUserService(users, {
      name: "Ian", 
      email: "ian@cubos.com",
      gender: "Male"
    })).toThrow(Error)
  })

  it("shoud not be able to create a new user with missing property", () => {
    const users = []

    try {
      createUserService(users, {
        name: "Ian", 
        email: "ian@cubos.com",
      })
    } catch(error) {
        expect(error).toHaveProperty("message")
        expect(error.message).toBe("Preencha todos os campos!")
    }
  })
})

