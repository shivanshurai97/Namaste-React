import { sum } from "../sum";

test("Sum function should evaluate the sum of numbers", () => {
  const result = sum(7, 9);

  //Assertion
  expect(result).toBe(16);
});
