import { Header } from "./components/header.js";

export class App {
  constructor() {
    this.render();
  }

  render() {
    new Header();

    const children = $(`
      <main></main>
    `);

    $("#app").append(children);
  }
}
