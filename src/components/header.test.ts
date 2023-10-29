import '@testing-library/jest-dom';
import { Header } from './header';
import { screen } from '@testing-library/dom';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const header = new Header('div');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });

    test('Then it should be instance of Header', () => {
      const element = screen.getByText(/POKEAPI/i);
      expect(element).toBeInTheDocument();
    });
  });
});
