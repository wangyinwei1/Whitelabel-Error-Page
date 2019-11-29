import {observable, extendObservable, action, toJS} from 'mobx';
import {
  getLoad,
  sealHead,
  electricity,
  alarm,
  battery,
  environment,
  rectifierModule,
  chart,
  alternatingCurrent,
} from 'util/api';
import store from 'store';

//导出
export default class ScreenModal {
  constructor() {
    this.reset(true);
  }

  @action
  reset = init => {
    const state = {
      visible: {},
      currentType: null,
      loadData: {},
      electricity: {},
      rectifierModule: {},
      battery: {},
      environment: {},
      ring: {},
      alternatingCurrent: {},
      alarm: {},
      chart: {},
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }
  };

  @action
  onWillMount = async (location, match, history) => {
    this.reset();
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
  getLoad = async (params = {}) => {
    // params['suId'] = '5E-2E-BA-4E-D3-69';
    params['suId'] = '5E-2E-BA-4E-D3-69';
    let res = await getLoad(params);
    this.loadData = res.data || {};
  };

  @action
  getBattery = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await battery(params);
    this.battery = res.data || {};
  };

  @action
  getElectricity = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await electricity(params);
    this.electricity = res.data || {};
    if (res.data && res.data.electricitys && res.data.electricitys[0]) {
      let item = res.data.electricitys[0];
      this.getChart({
        spId: item.spId,
        deviceId: item.deviceId,
      });
    }
  };
  @action
  getChart = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    let res = await chart(params);
    this.chart = res.data || {};
  };
  @action
  getRectifierModule = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await rectifierModule(params);
    this.rectifierModule = res.data || {};
  };
  @action
  getRing = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await sealHead(params);
    this.ring = res.data || {};
  };
  @action
  getEnvironment = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await environment(params);
    this.environment = res.data || {};
  };
  @action
  getAlternatingCurrent = async (params = {}) => {
    params['suId'] = '5E-2E-BA-4E-D3-69';
    // params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await alternatingCurrent(params);
    this.alternatingCurrent = res.data || {};
  };
  @action
  getAlarm = async (params = {}) => {
    // params['suId'] = '5E-2E-BA-4E-D3-69';
    params['suId'] = '0E-3B-46-3F-9B-8F';
    let res = await alarm(params);
    this.alarm = res.data || {};
  };

  @action
  confim = async type => {
    let obj = toJS(this.visible);
    obj[type] = true;
    this.visible = obj;
    this.currentType = type;
  };
}
