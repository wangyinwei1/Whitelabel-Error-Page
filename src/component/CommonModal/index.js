import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import cssModules from 'react-css-modules';
import {Modal, Button} from 'antd';
import classnames from 'classnames';

import styles from './style.less';

@inject('CommonModalStore')
@observer
@cssModules(styles)
class CommonModal extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.CommonModalStore;
  }
  onOk = async () => {
    const {cancle} = this.store;
    const {onOk} = this.props;
    if (typeof onOk === 'function') {
      await onOk(cancle);
    }
  };
  onCancle = () => {
    const {cancle} = this.store;
    const {onCancle} = this.props;
    onCancle ? onCancle(cancle) : cancle();
  };

  render() {
    const {cancle} = this.store;
    const {type, className} = this.props;
    return (
      <Modal
        wrapClassName={classnames(styles['modal'], className)}
        destroyOnClose={true}
        //校验字段新增户室
        {...this.props}
        visible={this.store.visible[type] || false}
        onOk={this.onOk}
        //取消新增单元
        onCancel={this.onCancle}>
        {this.props.children}
      </Modal>
    );
  }
}

export default CommonModal;
