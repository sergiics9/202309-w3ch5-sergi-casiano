export class ApiPokemon {
  pokeUrl: string;
  constructor() {
    this.pokeUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  }

  async getAllPokemon() {
    const response = await fetch(this.pokeUrl);
    const pokeList = await response.json();
    return pokeList.results;
  }

  async getEachPokemon() {
    const pokeContainer = [];
    const response = await fetch(this.pokeUrl);
    const pokeList = await response.json();
    const pokeDataContainer = await Promise.all(
      pokeList.results.map(async (pokemon: { url: string }) => {
        const eachUrl = pokemon.url;
        const response = await fetch(eachUrl);
        const pokeData = await response.json();
        return pokeData;
      })
    );
    for (let i = 0; i < pokeDataContainer.length; i + 20) {
      pokeContainer.push(pokeDataContainer.splice(i, 20));
    }

    return pokeContainer;
  }
}
