import user from "../PageObjectModel/user";
const baseUrl = "https://api.realworld.io";
export const URLs = {
  users: `${baseUrl}/api/users`,
};
const USER1: user = new user();
const USER2: user = new user();
export default class addUser {
  static conduitNewUserUsingAPI() {
    cy.api({
      method: "POST",
      //   url: "https://conduit.productionready.io/api/users",
      url: URLs.users,
      body: {
        user: {
          username: USER1.userName,
          email: USER1.email,
          password: USER1.password,
        },
      },
    }).then((response) => {
      expect(response).property("status").to.equal(201);
    });
  }

  static conduitNewUserUsingAPI2() {
    return cy.api({
      method: "POST",
      url: URLs.users,
      body: {
        user: USER2.genarate_payload(),
      },
    });
  }
}
