import {accOpen} from './modules/acc.js';
import './modules/modal.js';
import './modules/burger-menu.js';

{
  const init = () => {
    accOpen();
  };

  window.gameOver = init;
}
