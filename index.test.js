//mocking tutortals

jest.mock("./mathUtils");
const { calculate } = require("./app");
const { addToArray } = require("./arrayUtils");
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
let testArray;
beforeAll(() => {
  console.log("Before all tests : initailize the array");
  testArray = [];
});
afterAll(() => {
  console.log("After all tests : clear");
  testArray = null;
});

beforeEach(() => {
  console.log("before each tests : clear");
  testArray = [];
});

afterEach(() => {
  console.log("After each tests : clear");
  console.log(testArray);
});

test("add item to array", () => {
  addToArray(testArray, "manish");
  expect(testArray).toContain("manish");
});

/// TDD -> TEST DRIVEN DEVELOPMENT
// mainly focus on the unit test
// write a test case and then you create or implement

/// BDD -> behaviour driven development
// as a scanario
// a user ,want to login and access the account
// scanario : succesful login
// given the user is on the login page
// when the user enters credenatils
// then user should be redirected to dashboard

// cucumber JS
Given("the user is on the login page", () => {
  //
});
When("the user enter credentails", () => {
  //
});

Then("the verify and navigate to dashboard", () => {
  //
});
