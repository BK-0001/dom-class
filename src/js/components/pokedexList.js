import { Component } from "../common/component.js";
import { PokedexContext } from "../context/pokedexContext.js";

export class PokedexList extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { pokedex: PokedexContext.getInstance() });

    this.context.pokedex.addStateChangeListener(() => this.render());
  }

  render() {
    this.parentElement.empty();

    this.context.pokedex.items.forEach((pokemon) => {
      const children = $(`
        <li>${pokemon.name}</li>
      `);

      this.parentElement.append(children);
    });
  }
}
