import { faker } from "@faker-js/faker";

export default class user {
  elements = {
    username: faker.internet.userName(), // Rowan Nikolaus
    email: faker.internet.email(),
    password: faker.internet.password(), // Kassandra.Haley@erich.biz
  };

  get userName() {
    console.log(this.elements.username);
    return this.elements.username;
  }
  get email() {
    console.log(this.elements.email);
    return this.elements.email;
  }
  get password() {
    console.log(this.elements.password);
    return this.elements.password;
  }
  genarate_payload() {
    return this.elements;
  }
}
