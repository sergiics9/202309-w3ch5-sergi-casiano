import { Component } from './component';
import '../scss/footer.scss';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` 
    <footer>
    <div>
      <img src="./img/footer.png" alt="Footer pokemon logo" width="130" height="100">
      </div>
      <p>©️ Sergi Casiano | PokéAPI <img class="pokeball-footer" src="./img/pokeball.png" alt="Pokeball" width="25" height="25"> </p>
    </footer>
    `;
  }
}
