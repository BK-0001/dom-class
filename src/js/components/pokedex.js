import { Component } from "../common/component.js";
import { PokedexList } from "./pokedexList.js";

const BASE_CLASS = "pokedex";

export class Pokedex extends Component {
  render() {
    const children = $(`
      <div class="${BASE_CLASS}">
        <h1 class="${BASE_CLASS}__title">PokeDex</h1>
        <ul class="${BASE_CLASS}__list"></ul>
      </div>
    `);

    new PokedexList(children.find("ul"));

    this.parentElement.append(children);
  }
}
