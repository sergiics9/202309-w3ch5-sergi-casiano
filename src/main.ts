import { Header } from './components/header';
import { Footer } from './components/footer';
import './scss/styles.scss';

function main() {
  new Header('.container');
  new Footer('.container');
}

main();
