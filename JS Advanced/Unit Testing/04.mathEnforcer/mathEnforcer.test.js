const { expect } = require("chai");
const mathEnforcer = require("./mathEnforcer");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("undefined with string", () => {
      expect(mathEnforcer.addFive("5")).to.equal(undefined);
    });
    it("undefined with boolean", () => {
      expect(mathEnforcer.addFive(false)).to.equal(undefined);
    });
    it("correct", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it("correct with floating", () => {
      expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    });
    it("correct with negative", () => {
      expect(mathEnforcer.addFive(-3)).to.equal(2);
    });
  });
  describe("subtractTen", () => {
    it("undefined with string", () => {
      expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
    });
    it("undefined with boolean", () => {
      expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
    });
    it("correct", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });
    it("correct", () => {
      expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
    });
    it("correct", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
  });
  describe("sum", () => {
    it("undefined with string and string", () => {
      expect(mathEnforcer.sum("5", "5")).to.equal(undefined);
    });
    it("undefined with string and string", () => {
      expect(mathEnforcer.sum(true, false)).to.equal(undefined);
    });
    it("undefined with string and string", () => {
      expect(mathEnforcer.sum(5, "false")).to.equal(undefined);
    });
    it("undefined with string and string", () => {
      expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
    });
    it("correct", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it("correct", () => {
      expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
    });
  });
});
