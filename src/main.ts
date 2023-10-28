import './scss/main.scss';
import { Header } from './components/header';
import { Main } from './components/main';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { Pokeballs } from './components/pokeballs';

new Header('#app');
new Pokeballs('#app');
new Main('#app');
new Card('main');

new Footer('#app');
