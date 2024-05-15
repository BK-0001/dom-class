export class PokedexContext {
  static instance;
  #items;
  #stateChangeListeners;

  constructor() {
    this.#items = [];
    this.#stateChangeListeners = [];
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

  addStateChangeListener(func) {
    this.#stateChangeListeners.push(func);
  }

  capturePokemon(pokemon) {
    this.#items.push(pokemon);

    this.#stateChangeListeners.forEach((func) => {
      func();
    });
  }

  releasePokemon(id) {
    // release pokemon
  }
}
