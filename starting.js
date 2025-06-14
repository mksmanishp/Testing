// TEST SUITE

// describe("Multiply Test", () => {
//   it("2 and 5 multiply equal 10", async () => {
//     expect(multipy(2, 5)).toBe(10); //exact equality
//   });
//   it("2 and 5 multiply equal 10", async () => {
//     expect(multipy(2, 5)).not.toBe(5); //exact equality
//   });
// });

// test("2 and 5 multiply equal 10", async () => {
//   expect(multipy(2, 5)).toBe(10); //exact equality ===
// });

// test("object Equality", () => {
//   const data = { alpha: "A" };
//   data["beta"] = "B";
//   expect(data).toEqual({ alpha: "A", beta: "B" }); // deep Equality
// });

// test("Null Values", () => {
//   const value = null;
//   expect(value).toBeNull();
//   expect(value).toBeDefined();
//   expect(value).not.toBeUndefined();
//   expect(value).not.toBeTruthy();
//   expect(value).toBeFalsy();
// });

// test("Zero Values", () => {
//   const value = 0;
//   expect(value).not.toBeNull();
//   expect(value).toBeDefined();
//   expect(value).not.toBeUndefined();
//   expect(value).not.toBeTruthy();
//   expect(value).toBeFalsy();
// });

// test("Number Comparsion", () => {
//   const value = 3 + 3;
//   expect(value).toBeGreaterThan(5);
//   expect(value).toBeGreaterThanOrEqual(5);
//   expect(value).toBeLessThan(7);
//   expect(value).toBeLessThanOrEqual(6);
//   expect(value).toBe(6);
//   expect(value).toEqual(6);

//   const floatValue = 0.2 + 0.1;
//   expect(floatValue).toBeCloseTo(0.3, 5);
// });

// test("Array matchers", () => {
//   const todoList = [
//     "Buy Groceries",
//     "Clean book",
//     "Subscribe",
//     "Like",
//     "Comment",
//   ];
//   expect(todoList).toContain("Subscribe");
// });

// // async operations
// const fetchData = require("./index");
// const { add } = require("./mathUtils");

// test("the data to be good", () => {
//   return fetchData().then((data) => {
//     expect(data).toBe("good");
//   });
// });

// test("the data to be good", async () => {
//   const data = await fetchData();
//   expect(data).toBe("good");
// });
