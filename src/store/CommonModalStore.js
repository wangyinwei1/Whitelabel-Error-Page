import {observable, extendObservable, action, toJS} from 'mobx';
import _ from 'lodash';
import {message} from 'antd';

//导出
export default class AddUnit {
  constructor() {
    this.reset(true);
  }

  @action
  reset = init => {
    const state = {
      visible: {},
      currentType: null,
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }
  };

  @action
  cancle = async type => {
    let obj = toJS(this.visible);
    if (type) {
      obj[type] = false;
    } else {
      let keys = _.keys(obj);
      _.forEach(keys, item => {
        obj[item] = false;
      });
    }

    this.visible = obj;
  };
  @action
  confim = async type => {
    let obj = toJS(this.visible);
    obj[type] = true;
    this.visible = obj;
    this.currentType = type;
  };
}
