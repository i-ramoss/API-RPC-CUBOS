const addToLineService = require("../src/services/AddToLineService")

describe("AddToLineService", () => {
  
  it("should be able to add a user to the line", () => {
    const users = [{id: "1234"}]
    const rows = []
    const position = addToLineService(rows, users, "1234")

    expect(rows[0]).toBe("1234") 
    expect(position).toBe(1) 
  })

  it("should not be able to find a user to the line if the user not exists", () => {
    const users = []
    const rows = []

    try {
      addToLineService(rows, users, "1234")
    } catch (error) {
      expect(error).toHaveProperty("message")
      expect(error.message).toBe("O usuário não foi encontrado!")
    }
  })

  it("should not be able to add a user to the line if the alredy added", () => {
    const users = [{id: "1234"}]
    const rows = ["1234"]

    try {
      addToLineService(rows, users, "1234")
    } catch (error) {
      expect(error).toHaveProperty("message")
      expect(error.message).toBe("O usuário já foi cadastrado na fila!")
    }
  })
})