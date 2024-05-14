import { Component } from "../common/component.js";

const BASE_CLASS = "pokemon";

export class Pokemon extends Component {
  render() {
    const children = $(`
      <div class="${BASE_CLASS}">
        <h1 class="${BASE_CLASS}__title">Wild Pokemons</h1>
        <ul class="${BASE_CLASS}__list"></ul>
      </div>
    `);

    this.parentElement.append(children);
  }
}
