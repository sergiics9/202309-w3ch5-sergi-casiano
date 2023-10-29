import { Component } from './component';

export class Main extends Component {
  actualPage: number;
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.actualPage = 1;
    this.render();
  }

  createTemplate() {
    return `
    <main>
    <div class="header-2">
        <div class="blue-arrows">
        <img role="button" class="previousPage" src="/img/arrow_left_blue.png" alt="Flecha derecha para ambiar de pagina" width="100" height="100">
        <img role="button"  class="nextPage" src="/img/arrow_right_blue.png" alt="Flecha derecha para ambiar de pagina" width="100" height="100">
      </div>
      <h2>Normal form & Shiny</h2>
      <span class="count">Count: 20/1292 </span>
    </div>
    </main>`;
  }
}
