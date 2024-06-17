import {accOpen} from './modules/acc.js';
import './modules/modal.js';

{
  const init = () => {
    accOpen();
  };

  window.gameOver = init;
}
