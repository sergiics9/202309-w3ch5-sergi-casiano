export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;
  constructor(selector: string) {
    this.selector = selector;
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) return;
    element.insertAdjacentHTML(position, this.template);
    this.element = element.lastElementChild!;
  }

  clear() {
    this.element.outerHTML = '';
  }
}

//   ------------------- beforebegin
// <div>
//   ------------------- afterbegin
//   ......
//   <p></p>
//   .......
//   ------------------- beforeend
// </div>
// ---------------------- afterend
