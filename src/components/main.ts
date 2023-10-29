import { Component } from './component';
import { ApiPokemon } from '../data/api.pokemon';

export class Main extends Component {
  actualPage: number;
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.actualPage = 1;
    this.render();
  }

  handlePreviousPage() {
    if (this.actualPage === 1) {
      this.actualPage = 1;
    } else {
      this.actualPage -= 1;
    }

    this.clear();
    this.render();
  }

  handleNextPage() {
    if (this.actualPage === 300) {
      this.actualPage = 300;
    } else {
      this.actualPage += 1;
    }

    this.clear();
    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    const previousPage = this.element.querySelector('.previousPage');
    if (previousPage) {
      previousPage.addEventListener(
        'click',
        this.handlePreviousPage.bind(this)
      );
    }

    const nextPage = this.element.querySelector('.nextPage');
    if (nextPage) {
      nextPage.addEventListener('click', this.handleNextPage.bind(this));
    }
  }

  createTemplate() {
    return `
    <main>
        <div class="blue-arrows">
        <img role="button" class="previousPage" src="/img/arrow_left_blue.png" alt="Flecha derecha para ambiar de pagina" width="100" height="100">
        <img role="button"  class="nextPage" src="/img/arrow_right_blue.png" alt="Flecha derecha para ambiar de pagina" width="100" height="100">
      </div>
      <h2>Normal form & Shiny </h2>
    </main>`;
  }
}
