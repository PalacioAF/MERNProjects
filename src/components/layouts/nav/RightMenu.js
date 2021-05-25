import React from 'react';
import { Menu, Grid } from 'antd';

const { useBreakpoint } = Grid;

const RightMenu = ({user}) => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="/#">{user?user.userName:"User"}</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/#">Signup</a>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;