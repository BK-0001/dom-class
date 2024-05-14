import { Component } from "../common/component.js";

const BASE_CLASS = "pokemon";

export class Pokemon extends Component {
  constructor(parentElement) {
    super(parentElement);

    // all data would go in here
    this.getPokemonData();
  }

  async getPokemonData() {
    const response = await fetch("http://localhost:3005/pokemons");

    if (!response.ok) {
      throw new Error("something went wrong while getting pokemon data");
    }

    const pokemonData = await response.json();

    this.setState({ pokemonData });
  }

  render() {
    const children = $(`
      <div class="${BASE_CLASS}">
        <h1 class="${BASE_CLASS}__title">Wild Pokemons</h1>
        <ul class="${BASE_CLASS}__list"></ul>
      </div>
    `);

    (this.state.pokemonData || []).forEach((pokemon) => {
      const item = $(`<li>${pokemon.name}</li>`);

      item.on("click", () => {
        const copied = [...this.state.pokemonData];
        const index = copied.findIndex((poke) => poke.id === pokemon.id);

        if (index === -1) {
          alert(`pokemon not found with id: ${pokemon.id}`);
        } else {
          copied.splice(index, 1);
          this.setState({ pokemonData: copied });
        }
      });

      children.find("ul").append(item);
    });

    this.parentElement.append(children);
  }
}
