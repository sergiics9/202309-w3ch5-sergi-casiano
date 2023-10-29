import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const footer = new Footer('div');
    test('Then it should be instance of Footer', () => {
      expect(footer.element).toBeInstanceOf(HTMLElement);
    });
  });
});
