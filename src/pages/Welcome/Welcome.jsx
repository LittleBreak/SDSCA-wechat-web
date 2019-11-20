import React, { Component } from 'react';
import styles from './Welcome.less';
import { Button, Modal } from 'antd-mobile';
import { connect } from 'dva';
class Welcome extends Component {
  state = {
    visible: false,
  };
  showModal = params => {
    this.setState({
      visible: true,
    });
  };
  onClose = params => {
    this.setState({
      visible: false,
    });
  };

  // onWrapTouchStart = (e) => {
  //   // fix touch to scroll background page on iOS
  //   if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
  //     return;
  //   }
  //   const pNode = closest(e.target, '.am-modal-content');
  //   if (!pNode) {
  //     e.preventDefault();
  //   }
  // }

  server = params => {
    this.props.dispatch({
      type: `welcome/init`,
    });
  };
  render() {
    return (
      <div className={styles['container']}>
        <Button onClick={this.showModal}>test</Button>
        <Button onClick={this.server}>service</Button>
        <Modal
          visible={this.state.visible}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          title="Title"
          footer={[{ text: 'Ok', onPress: this.onClose }]}
          // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
            scoll content...
            <br />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ welcome }) {
  return { welcome };
}

export default connect(mapStateToProps)(Welcome);
