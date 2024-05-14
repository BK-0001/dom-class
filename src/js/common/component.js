export class Component {
  #parentElement;

  constructor(parentElement) {
    if (this.constructor.name === "Component") {
      throw new Error("Abstract class cannot be instantiated!");
    }

    this.#parentElement = parentElement;

    this.render();
  }

  get parentElement() {
    return this.#parentElement;
  }

  render() {
    throw new Error("All components must implement render method!");
  }
}
