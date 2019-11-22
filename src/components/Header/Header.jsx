import React, { Component } from 'react';
import styles from './Header.less';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
class Header extends Component {
  state = {
    open: true,
  };
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  };

  render() {
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        })}
      </List>
    );

    return (
      <h1 className={styles.title}>
        <Icon type="ellipsis" onClick={this.onOpenChange}></Icon>
        山东省干细胞学会
        {/* <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        ></Drawer> */}
      </h1>
    );
  }
}

export default Header;
