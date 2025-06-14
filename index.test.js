//mocking tutortals

jest.mock("./mathUtils");
const { calculate } = require("./app");
const { add } = require("./mathUtils");
const myModule = require("./spy");

//mocking
describe("calculate", () => {
  test("calls the function with arugments", () => {
    calculate(1, 2, "add");
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(1, 2);
  });
});

// spying function
test("should spy on fucntion and check if it is called", () => {
  const spy = jest.spyOn(myModule, "myFunction");
  myModule.myFunction();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

//Setup and TearDown
