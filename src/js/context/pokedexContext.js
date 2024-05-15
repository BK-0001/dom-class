export class PokedexContext {
  static instance;
  #items;

  constructor() {
    this.#items = [];
  }

  static getInstance() {
    if (!PokedexContext.instance) {
      PokedexContext.instance = new PokedexContext();
    }

    return PokedexContext.instance;
  }

  get items() {
    return this.#items;
  }

  capturePokemon(pokemon) {
    this.#items.push(pokemon);
  }

  releasePokemon(id) {
    // release pokemon
  }
}
