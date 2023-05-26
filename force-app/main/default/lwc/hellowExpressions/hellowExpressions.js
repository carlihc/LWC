import { LightningElement } from "lwc";

export default class HellowExpressions extends LightningElement {
  firstName = "";
  lastName = "";

  get upperCasedFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }

  handleChange(event) {
    const field = event.target.name;
    this.firstName = field === "firstName" ? event.target.value : this.firstName;
    this.lastName = field === "lastName" ? event.target.value : this.lastName;
  }
}
