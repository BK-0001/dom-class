import { Component } from "../common/component.js";

const BASE_CLASS = "pokemon-item";

export class PokemonItem extends Component {
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
      const pokemonElement = $(`
        <li>${name}</li>
      `);
      const parent = $(".pokedex__list");

      parent.append(pokemonElement);
    });

    this.parentElement.append(item);
  }
}
