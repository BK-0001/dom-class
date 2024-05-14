export class Component {
  #parentElement;
  #state;

  constructor(parentElement) {
    if (this.constructor.name === "Component") {
      throw new Error("Abstract class cannot be instantiated!");
    }
    this.#state = {};
    this.#parentElement = parentElement;

    this.render();
  }

  get state() {
    return this.#state;
  }

  setState(newState) {
    this.#state = newState;
    this.#parentElement.empty();
    this.render();
  }

  get parentElement() {
    return this.#parentElement;
  }

  render() {
    throw new Error("All components must implement render method!");
  }
}
