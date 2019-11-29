import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import classnames from 'classnames';

const {SubMenu} = Menu;
import styles from './index.less';

@withRouter
class SiderMenu extends Component {
  handleMenuClick = ({key}) => {
    const {history} = this.props;

    if (key === '/project/index') {
      history.push(key);
    }
  };

  render() {
    const {collapsed, location} = this.props;
    //默认打开一个
    let pathUrls = location.pathname.split('/');
    let openKey = '/project/mechanism';

    pathUrls.length > 1 && pathUrls.splice(pathUrls.length - 1, 1);
    openKey = pathUrls.join('/') || '';

    return (
      <Menu
        defaultSelectedKeys={['/project/mechanism/household']}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={[openKey]}
        className={styles.menu}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        onClick={this.handleMenuClick}>
        {/* <Menu.Item key="/project/index"> */}
        {/*   <Icon type="pie-chart" /> */}
        {/*   {/* <Link to="/project">首页</Link> */}
        {/*   <span>首页</span> */}
        {/* </Menu.Item> */}
        <SubMenu
          key="/mechanism"
          title={
            <span>
              <i
                className={classnames(
                  'iconfont iconjigouguanli',
                  styles['action'],
                )}></i>
              <span>机构管理</span>
            </span>
          }>
          <Menu.Item key="/mechanism/household">
            <Link to="/mechanism/household">户室管理</Link>
          </Menu.Item>
          <Menu.Item key="/mechanism/device">
            <Link to="/mechanism/device">设备管理</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/personnel"
          title={
            <span>
              <i
                className={classnames(
                  'iconfont iconrenyuanguanli',
                  styles['action'],
                )}></i>
              <span>人员管理</span>
            </span>
          }>
          <Menu.Item key="/personnel/owner">
            <Link to="/personnel/owner">业主管理</Link>
          </Menu.Item>
          <Menu.Item key="/personnel/staff">
            <Link to="/personnel/staff">工作人员管理</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/card"
          title={
            <span>
              <i
                className={classnames(
                  'iconfont iconrenyuanguanli',
                  styles['action'],
                )}></i>
              <span>卡片管理</span>
            </span>
          }>
          <Menu.Item key="/card/input">
            <Link to="/card/input">卡片录入</Link>
          </Menu.Item>
          <Menu.Item key="/card/used">
            <Link to="/card/used">已使用卡片</Link>
          </Menu.Item>
          <Menu.Item key="/card/loss">
            <Link to="/card/loss">已挂失卡片</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/accessControl"
          title={
            <span>
              <i
                className={classnames(
                  'iconfont iconmenjinguanli',
                  styles['action'],
                )}></i>
              <span>门禁监控</span>
            </span>
          }>
          <Menu.Item key="/accessControl/idRecord">
            <Link to="/accessControl/idRecord">识别记录</Link>
          </Menu.Item>
          <Menu.Item key="/accessControl/openingRecord">
            <Link to="/accessControl/openingRecord">开门记录</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/settings"
          title={
            <span>
              <i
                className={classnames(
                  'iconfont iconxitongguanli',
                  styles['action'],
                )}></i>
              <span>系统设置</span>
            </span>
          }>
          <Menu.Item key="/settings/log">
            <Link to="/settings/log">操作日志</Link>
          </Menu.Item>
          <Menu.Item key="/settings/changePassword">
            <Link to="/settings/changePassword">修改密码</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SiderMenu;
