import { Component } from "../common/component.js";
import { PokedexContext } from "../context/pokedexContext.js";

const BASE_CLASS = "pokemon-item";

export class PokemonItem extends Component {
  constructor(parentElement, props) {
    super(parentElement, props, { pokedex: PokedexContext.getInstance() });
  }

  render() {
    const { name, ThumbnailImage, ThumbnailAltText } = this.props.pokemon;

    const item = $(`
      <li class="${BASE_CLASS}">
        <h1 class="${BASE_CLASS}__title">${name}</h1>
        <img class="${BASE_CLASS}__img" src="${ThumbnailImage}" alt="${ThumbnailAltText}">

        <button class="button button--full ${BASE_CLASS}__button">Capture</button>
      </li>
    `);

    item.find("button").on("click", () => {
      this.context.pokedex.capturePokemon(this.props.pokemon);
    });

    this.parentElement.append(item);
  }
}
