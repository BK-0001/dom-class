export class Component {
  #parentElement;
  #state;
  #props;

  constructor(parentElement, props = {}) {
    if (this.constructor.name === "Component") {
      throw new Error("Abstract class cannot be instantiated!");
    }
    this.#state = {};
    this.#parentElement = parentElement;
    this.#props = props;

    this.render();
  }

  get props() {
    return this.#props;
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
