import {observable, extendObservable, action, toJS} from 'mobx';
import _ from 'lodash';
import {message} from 'antd';

//导出
export default class Global {
  constructor() {
    this.reset(true);
  }

  @action
  reset = init => {
    const state = {
      currentPage: {},
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }

    this.location = {};
    this.match = {};
    this.history = {};
  };
  setRoute = (location, match, history) => {
    this.location = location;
    this.match = match;
    this.history = history;
  };
  @action
  setCurrentPage = async ref => {
    this.currentPage = ref;
  };
}
