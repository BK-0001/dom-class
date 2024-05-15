import { Component } from "./common/component.js";
import { Header } from "./components/header.js";
import { Pokedex } from "./components/pokedex.js";
import { Pokemon } from "./components/pokemon.js";

export class App extends Component {
  render() {
    new Header(this.parentElement);

    const children = $(`
      <main></main>
    `);

    new Pokemon(children);
    new Pokedex(children);

    this.parentElement.append(children);
  }
}
