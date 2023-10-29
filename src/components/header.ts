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
   <h1>POKEAPI</h1>
    <img src="./img/pokemon-logo.svg" alt="Header pokemon logo">
     
    </header>
    `;
  }
}
