import { Component } from './component';
import '../scss/pokeballs.scss';

export class Pokeballs extends Component {
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
    <div class="pokeballs">
    <img class="pokeball" src="./img/pokeball2.png" alt="Header pokemon logo" width=60" height="70">
    <img class="superball" src="./img/superball.png" alt="Header pokemon logo" width="40" height="40">
    <img class="ultraball" src="./img/ultraball.png" alt="Header pokemon logo" width="70" height="70">
    <img class="masterball" src="./img/masterball.png" alt="Header pokemon logo" width="60" height="60">
    </div
    `;
  }
}
