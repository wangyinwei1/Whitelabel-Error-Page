import * as React from 'react';
import loadable from 'react-loadable';
import Loading from 'component/Loading';
import {hot} from 'react-hot-loader';
import {
  BrowserRouter,
  Route,
  Redirect,
  IndexRedirect,
  Switch,
} from 'react-router-dom';
import {Provider} from 'mobx-react';
import App from 'layout/App';
import store from 'store';
import {LocaleProvider} from 'antd';
import loginUtil from 'util/login';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import 'stylesheet/cantd.less';
import 'stylesheet/app.less';
import 'stylesheet/iconfont.less';

function getComponentAsync(loader) {
  return loadable({
    loader: () => loader,
    loading: Loading,
  });
}

const Root = () => (
  <Provider {...store}>
    <LocaleProvider locale={zh_CN}>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/screen"
              component={getComponentAsync(import('page/Screen'))}
            />
            <Redirect exact from="/" to="/screen" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default hot(module)(Root);
