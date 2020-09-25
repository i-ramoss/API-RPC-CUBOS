const populateLineService = require("../src/services/PopulateLineService")

describe("PopulateLineService", () => {

  it("should be able to list the line", () => {
    const users = [{
      "id": "240cb817-86f4-4809-84e9-a6af7458108e",
      "name": "Flora",
      "email": "flora@cubos.com",
      "gender": "female"
    }]
    const rows = ["240cb817-86f4-4809-84e9-a6af7458108e"]
    const fillRow = populateLineService(rows, users)

    expect(fillRow[0]).toHaveProperty("position")
    expect(fillRow[0]).toMatchObject(
      expect.objectContaining({name: "Flora", email: "flora@cubos.com", gender: "female", position: 1})
    )
  })
})