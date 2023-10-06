import addUser from "../../support/helpers/singupHelpersSecond";

describe("Conduit : Sginup Account ", () => {
  it("c1000 : Login Create New Account   ", () => {
    cy.api({
      method: "POST",
      url: "https://conduit.productionready.io/api/users",
      body: {
        user: {
          username: `alaa${Math.round(1000 * Math.random())}`,
          email: `alaa${Math.round(1000 * Math.random())}@gmail.com`,
          password: "12453",
        },
      },
    }).then((response) => {
      expect(response).property("status").to.equal(201);
    });
  });
  it("c1001 : Login Create New Account execute function with parameters ", () => {
    addUser.conduitNewUserUsingAPI(
      `alaa${Math.round(1000 * Math.random())}`,
      `alaa${Math.round(1000 * Math.random())}@gmail.com`,
      "12453"
    );
  });
  it("c1002 : Login Create New Account execute function with parameter payload ", () => {
    const payload = {
      user: {
        username: `alaa${Math.round(1000 * Math.random())}`,
        email: `alaa${Math.round(1000 * Math.random())}@gmail.com`,
        password: "12453",
      },
    };
    addUser.conduitNewUserUsingAPI2(payload).then((response) => {
      expect(response).property("status").to.equal(201);
    });
  });
});
