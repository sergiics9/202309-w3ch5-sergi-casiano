import { Component } from './component';
import '../scss/header.scss';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <header>
    <img src="./img/pokemon-logo.svg" alt="Header pokemon logo">
    </header>
    `;
  }
}
