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
  it("Deberia retornar de 9 a IX", () => {
    expect(romano(9)).toEqual('IX');
  });
  it("Deberia retornar de 10 a X", () => {
    expect(romano(10)).toEqual('X');
  });
  it("Deberia retornar de 8 a VIII", () => {
    expect(romano(8)).toEqual('VIII');
  });
  it("Deberia retornar de 20 a XX", () => {
    expect(romano(20)).toEqual('XX');
  });
  it("Deberia retornar de 40 a XL", () => {
    expect(romano(40)).toEqual('XL');
  });
  it("Deberia retornar de 55 a LV", () => {
    expect(romano(55)).toEqual('LV');
  });
  it("Deberia retornar de 99 a XCIX", () => {
    expect(romano(99)).toEqual('XCIX');
  });
  it("Deberia retornar de 100 a C", () => {
    expect(romano(100)).toEqual('C');
  });
});

