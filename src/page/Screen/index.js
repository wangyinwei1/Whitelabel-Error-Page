import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Link, withRouter} from 'react-router-dom';
import cssModules from 'react-css-modules';
import {message, Checkbox} from 'antd';
import {login, getCaptcha} from 'util/api';

class Screen extends Component {
  render() {
    return <div>这个页面可以访问到</div>;
  }
}

export default Screen;
