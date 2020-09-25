const popLineService = require("../src/services/PopLineService")

describe("PopLineService", () => {

  it("should be able to delete a user of line and return him", () => {
    const users = [
      {
        "id": "123",
        "name": "Ian",
        "email": "ian@cubos.com",
        "gender": "male"
      }
    ]
    const rows = ["123"]
    const removedUser = popLineService(rows, users)

    expect(removedUser).toBe(users[0])
    expect(rows.length).toBe(0)
  })

  it("should not be able to delete a user bacause the line os empty", () => {
    const users = [
      {
        "id": "123",
        "name": "Ian",
        "email": "ian@cubos.com",
        "gender": "male"
      }
    ]
    const rows = []

    try {
      popLineService(rows, users)
    } catch (error) {
      expect(error).toHaveProperty("message")
      expect(error.message).toBe("A fila já está vazia")
    }
  })
})