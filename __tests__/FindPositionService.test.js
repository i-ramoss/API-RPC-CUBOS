const findPositionService = require("../src/services/FindPositionService")

describe("FindPositionService", () => {

  it("should be able to find a user on line by email", () => {
    const users = [{id: "1234", email: "flora@cubos.com"}]
    const rows = ["32", "1234"]
    const position = findPositionService(rows, users, "flora@cubos.com")

    expect(position).toBe(2)
  })

  it("should not be able to find a user because the email not exists", () => {
    const users = [{id: "1234", email: "ian@cubos.com"}]
    const rows = []

    try {
      findPositionService(rows, users, "flora@cubos.com")
    } catch (error) {
      expect(error).toHaveProperty("message")
      expect(error.message).toBe("O usuário não foi encontrado!")
    }
  })

  it("should not be able to find the user on line", () => {
    const users = [{id: "321", email: "flora@cubos.com"}]
    const rows = []

    try {
      findPositionService(rows, users, "flora@cubos.com")
    } catch (error) {
      expect(error).toHaveProperty("message")
      expect(error.message).toBe("O usuário não está cadastrado na fila")
    }
  })
})