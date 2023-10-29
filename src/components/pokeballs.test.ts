import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Pokeballs } from './pokeballs';

describe('The image component', () => {
  test('alt contains correct value', () => {
    const testImage = document.querySelector('.pokeballs') as HTMLImageElement;
    expect(testImage.alt).toContain('pokeball');
  });

  test('src contains correct value', () => {
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('./img/');
  });
});
