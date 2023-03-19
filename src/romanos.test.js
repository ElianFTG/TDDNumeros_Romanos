import romano from "./romanos";

describe("Romano", () => {
  it("Deberia retornar I", () => {
    expect(romano(1)).toEqual('I');
  });
  it("Deberia retornar de 2 a II", () => {
    expect(romano(2)).toEqual('II');
  });
});

