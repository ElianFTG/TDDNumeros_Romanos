import romano from "./romanos";

describe("Romano", () => {
  it("Deberia retornar I", () => {
    expect(romano(1)).toEqual('I');
  });
  it("Deberia retornar de 4 a IV", () => {
    expect(romano(4)).toEqual('IV');
  });
  it("Deberia retornar de 5 a V", () => {
    expect(romano(5)).toEqual('V');
  });
});

