import { User } from "./src/js/user.js";

describe("User constructor", () => {
  test("should create a new user using the User class constructor", () => {
    const user = new User();
    expect(user).toEqual("blah");
  });
});