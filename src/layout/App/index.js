import React, {Component} from 'react';
import {/* Link, */ withRouter} from 'react-router-dom';
import cssModules from 'react-css-modules';
import {Layout, Icon, Menu, Dropdown, /* Avatar, */ Tooltip} from 'antd';
import SiderMenu from 'layout/SiderMenu';
import loginUtil from 'util/login';
import styles from './style.less';
import logo from 'image/logo.png';
import logoTitle from 'image/logo_title.png';
import classnames from 'classnames';
import {inject, observer} from 'mobx-react';

const {Header, Sider, Content} = Layout;
@withRouter
@inject('GlobalStore')
@observer
@cssModules(styles, {
  allowMultiple: true,
})
class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleMenuClick = ({key}) => {
    if (key === 'logout') {
      loginUtil.logout();
      this.props.history.push('/login');
    }
  };

  render() {
    const {collapsed} = this.state;

    const userInfo = loginUtil.getUserInfo() || {};
    let pathUrls = this.props.location.pathname.split('/');
    pathUrls.indexOf();

    const menu = (
      <Menu
        className="user-menu"
        selectedKeys={[]}
        onClick={this.handleMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          width={256}
          collapsed={this.state.collapsed}>
          <div styleName="logo">
            <img
              src={logo}
              style={collapsed ? {height: '40px'} : {marginBottom: '16px'}}
              alt="logo"
            />
            <h1 styleName="title">{collapsed ? '' : '平安小区门禁管理'}</h1>
          </div>
          <SiderMenu collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            {/* <Icon */}
            {/*   styleName="icon-menu-trigger" */}
            {/*   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} */}
            {/*   onClick={this.toggle} */}
            {/* /> */}
            <i
              onClick={() => {
                let _this = this.props.GlobalStore.currentPage;
                _this && _this.reset && _this.reset();
              }}
              className={classnames(
                'iconfont iconshuaxin',
                styles['refresh'],
              )}></i>

            <div styleName="right">
              <Dropdown overlay={menu}>
                <span styleName="action account">
                  <i
                    className={classnames(
                      'iconfont iconyonghutouxiang',
                      styles['loginout-icon'],
                    )}
                  />
                  <span styleName="avatar">{userInfo.name}</span>
                  <i className={classnames('iconfont iconzhankai')} />
                </span>
              </Dropdown>
            </div>
          </Header>

          <Content className={styles['layout-content']}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
