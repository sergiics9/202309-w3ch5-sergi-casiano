import { Component } from './component';

describe('Component', () => {
  describe('Given a Component instance', () => {
    let testComponent: Component;

    beforeEach(() => {
      document.body.innerHTML = '<div id="root"></div>';
      testComponent = new Component('#root');
    });
    test('should clear the component when calling clear', () => {
      const parentElement = document.createElement('div');
      parentElement.innerHTML = '<p>This is some content.</p>';
      const component = new Component('#root');
      component.element = parentElement;
      component.clear();
      expect(component.element.outerHTML).toBe('<div> </div>');
    });

    test('does nothing if element is not defined', () => {
      const component = new Component('#root');
      component.clear();
      expect(component.element).toBeUndefined();
    });

    test('throws an error when the selector is invalid', () => {
      const invalidSelector = '#nonexistent';
      const component = new Component(invalidSelector);
      expect(() => component.render()).toThrowError('Wrong selector');
    });

    test('does not throw an error when the selector is valid', () => {
      const validSelector = '#root';
      const component = new Component(validSelector);
      expect(() => component.render()).not.toThrow();
    });
  });
});
