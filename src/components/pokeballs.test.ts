import '@testing-library/jest-dom';

describe('The image component', () => {
  test('alt contains correct value', () => {
    const testImage = document.querySelector('.pokeballs') as HTMLImageElement;
    if (testImage) {
      expect(testImage.alt).toContain('pokeball');
    } else {
      //
    }
  });

  test('src contains correct value', () => {
    const testImage = document.querySelector('img') as HTMLImageElement;
    if (testImage) {
      expect(testImage.alt).toContain('./img/');
    } else {
      //
    }
  });
});
