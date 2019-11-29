/**
 * @name 请求API代理
 * @author gongzhen
 * @param options
 * @param 参数详解：https://github.com/axios/axios
 * @since 2018-09-13
 */
import axios from 'axios';
import errorHint from './errorHint';
import loginUtil from '../login';
import {message} from 'antd';
import qs from 'qs';

// 默认配置
axios.defaults.method = 'post';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = '';

const noNeedAuthAPI = ['/api/v1/captcha', '/api/v1/user/auth/captcha'];

// 添加请求拦截器
axios.interceptors.request.use(config => {
  if (process.env.API === 'mock') {
    config.url = `http://rap2api.taobao.org/app/mock/226811/${config.method}${config.url}`;
  } else {
    if (noNeedAuthAPI.indexOf(config.url) > -1) {
      return config;
    }
    if (config.method === 'get' && qs.stringify(config.data)) {
      config.url = config.url + '?' + qs.stringify(config.data);
    }

    const userInfo = loginUtil.getUserInfo();

    if (userInfo) {
      config.headers.common['token'] = userInfo.token;
    } else {
      // window.location.href = '/login';
    }
  }

  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          message.error('token过期');
          location.href = location.origin + '/login';
          loginUtil.logout();
      }
    }
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  },
);

const request = (options, resolve) =>
  axios({...options})
    .then(resp => {
      const data = resp.data || {};
      resolve(data);

      if (data.code !== 200 && options.handle === false) {
        errorHint.push(data.msg);
      }
    })
    .catch(err => {
      const data = {
        status: false,
        code: '-1',
        msg: `HTTP ERROR: ${err.message}`,
      };
      resolve(data);
      errorHint.push(data.msg);
    });

const ajax = options => new Promise(resolve => request(options, resolve));

export default ajax;
