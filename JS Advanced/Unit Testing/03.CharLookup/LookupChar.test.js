const { expect } = require("chai");
const lookupChar = require("./LookupChar");

describe("lookUpChar Testing", () => {
  it("check for undefined with num and string", () => {
    expect(lookupChar(5, "5")).to.equal(undefined);
  });
  it("check for undefined with floating", () => {
    expect(lookupChar("five", 3.1)).to.equal(undefined);
  });
  it("check for undefined with boolean and boolean", () => {
    expect(lookupChar(true, false)).to.equal(undefined);
  });
  it("check for invalid index", () => {
    expect(lookupChar("five", 5)).to.equal("Incorrect index");
  });
  it("check for invalid index - negative number", () => {
    expect(lookupChar("five", -5)).to.equal("Incorrect index");
  });
  it("check for invalid index - negative number", () => {
    expect(lookupChar("five", 4)).to.equal("Incorrect index");
  });
  it("check for valid", () => {
    expect(lookupChar("fivee", 4)).to.equal("e");
  });
  it("check for empty str", () => { 
    expect(lookupChar(" ", 0)).to.equal(" ");
  });
});
