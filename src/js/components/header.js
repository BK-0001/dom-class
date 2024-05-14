const BASE_CLASS = "header";

export class Header {
  constructor() {
    this.render();
  }

  render() {
    const children = $(`
      <header class="${BASE_CLASS}">
        <div class="${BASE_CLASS}__wrapper">
          <h1 class="${BASE_CLASS}__title">Poke Demo</h1>
        </div>
      </header>
    `);

    $("#app").append(children);
  }
}
