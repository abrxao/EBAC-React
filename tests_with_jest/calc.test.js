import operations from "./mainJs/calc.js"
const { division, sum, mult, subtraction } = operations;

describe('calculations fns', () =>{
    test('should return 0.5', ()=>{
        const result = division(1,2)
        expect(result).toBe(.5)
    })
    test("should return 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test("should return 2", () => {
      const result = mult(1, 2);
      expect(result).toBe(2);
    });
    test("should return -1", () => {
      const result = subtraction(1, 2);
      expect(result).toBe(-1);
    });
    test("should not return 2", () => {
      const result = division(1, 2);
      expect(result).not.toBe(2);
    });
    test("should not return 4", () => {
      const result = sum(1, 2);
      expect(result).not.toBe(4);
    });
    test("should not return 5", () => {
      const result = mult(1, 2);
      expect(result).not.toBe(5);
    });
    test("should not return -2", () => {
      const result = subtraction(1, 2);
      expect(result).not.toBe(-2);
    });
})