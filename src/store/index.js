import ScreenStore from './ScreenStore/index.js';

import GlobalStore from './Global.js';
let Store;

Store = {
  ScreenStore: new ScreenStore(),
  GlobalStore: new GlobalStore(),
};

export default Store;
