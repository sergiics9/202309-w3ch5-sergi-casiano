import { Component } from './component';
import { PokemonData } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: PokemonData[][];
  repository: ApiPokemon;

  offset!: number;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.offset = 0;
    this.handleLoadEach();
  }

  render() {
    super.clear();
    this.template = this.createTemplate();
    super.render();
  }

  async handleLoadEach() {
    this.pokemon = await this.repository.getEachPokemon();
    this.render();
  }

  createTemplate() {
    const pokeList = this.pokemon.map((pokemonPage) =>
      pokemonPage.map(
        (pokemon) => `
          <li>
            <p class="id">#${pokemon.id}</p>
            <a href="https://pokeapi.co/api/v2/pokemon/${pokemon.name}/">
            <p class="name" </p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              pokemon.id
            }.gif" height="120" width="120">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${
                          pokemon.id
                        }.gif" height="120" width="120">
            <p class="name">${pokemon.name.toUpperCase()}</p>
            </a>
          </li>`
      )
    );
    return `
      <ul>${pokeList[this.offset].join('')}</ul>
      `;
  }
}
