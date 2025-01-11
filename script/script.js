import {accOpen} from './modules/acc.js';
import './modules/modal.js';
import './modules/burger-menu.js';
import './modules/swiper.js';
import './modules/inputMask.js';
import './modules/justValidate.js';

{
  const init = () => {
    accOpen();
  };

  window.gameOver = init;
}
