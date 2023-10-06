const baseUrl = Cypress.config().baseUrl;
export const URLs = {
  users: `${baseUrl}/api/users`,
};

export default class addUser {
  static conduitNewUserUsingAPI(
    userName: string,
    email: string,
    password: string
  ) {
    cy.api({
      method: "POST",
      //"https://conduit.productionready.io/api/users",
      url: URLs.users,
      body: {
        user: {
          username: userName,
          email: email,
          password: password,
        },
      },
    }).then((response) => {
      console.log(URLs.users);
      expect(response).property("status").to.equal(201);
    });
  }
  static conduitNewUserUsingAPI2(payload: any) {
    return cy.api({
      method: "POST",
      url: URLs.users,
      body: payload,
    });
  }
}
