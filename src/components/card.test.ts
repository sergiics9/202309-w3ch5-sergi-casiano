import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Pokemon } from '../model/pokemon';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    const pokemon: Pokemon = {
      id: 1,
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
      name: 'bulbasaur',
    };
    document.body.innerHTML = '<ul></ul>';
    const card = new Card('ul');
    test('Then it should be instance of Card', () => {
      expect(card).toBeInstanceOf(Card);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByText(pokemon.name.toUpperCase());
      expect(element).toBeInTheDocument();
    });
  });
});
