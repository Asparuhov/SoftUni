const { expect } = require("chai");
const isOddOrEven = require("./EvenOdd.js");

describe("Request validation", () => {
  it("Check for undefined with number", () => {
    expect(isOddOrEven(5)).to.equal(undefined);
  });
  it("Check for undefined with boolean", () => {
    expect(isOddOrEven(true)).to.equal(undefined);
  });

  it("Check for even length", () => {
    expect(isOddOrEven("lion")).to.equal("even");
  });
  it("Check for odd length", () => {
    expect(isOddOrEven("lio")).to.equal("odd");
  });
});
