import { Component } from "../common/component.js";
import { PokemonItem } from "./pokemonItem.js";

export class PokemonList extends Component {
  constructor(parentElement) {
    super(parentElement);

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
    (this.state.pokemonData || []).forEach((pokemon) => {
      new PokemonItem(this.parentElement, { pokemon });
    });
  }
}
