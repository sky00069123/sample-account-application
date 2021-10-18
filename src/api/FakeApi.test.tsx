import FakeAPI from "./FakeApi";

describe("Api responds to", () => {
  it("healthCheck with ok status", async () => {
    expect.assertions(1);
    await expect(FakeApi.healthCheck()).resolves.toEqual({ status: "OK" });
  });
});
