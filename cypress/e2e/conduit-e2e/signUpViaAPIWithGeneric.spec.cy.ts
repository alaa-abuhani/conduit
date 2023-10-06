// import addUser from "../../support/helpers/singupHelpers";
import addUser from "../../support/helpers/signupHelperfirst";

describe("Conduit : Sginup Account ", () => {
  it("c1001 : Login Create New Account via execute get username ,email , password  function ", () => {
    addUser.conduitNewUserUsingAPI();
  });
  it("c1002 : Login Create New Account via execute generate payload function", () => {
    addUser.conduitNewUserUsingAPI2().then((response) => {
      expect(response).property("status").to.equal(201);
    });
  });
});
