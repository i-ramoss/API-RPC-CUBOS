const filterLineService = require("../src/services/FilterLineService")

describe("FilterLineService", () => {

  it("should be able to filter a user on line by gender", () => {
    const users = [
      {
        "id": "123",
        "name": "Ian",
        "email": "ian@cubos.com",
        "gender": "male"
      },
      {
        "id": "1234",
        "name": "Flora",
        "email": "flora@cubos.com",
        "gender": "female"
      }
    ]
    const rows = ["1234", "123"]
    const filter = filterLineService(rows, users, "Male")

    expect(filter[0]).toMatchObject(
      expect.objectContaining({name: "Ian", email: "ian@cubos.com", gender: "male", position: 2})
    )
  })
})