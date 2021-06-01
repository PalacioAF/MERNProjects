import React from 'react';
import { Menu, Grid, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import styles from '../style.css'

const { useBreakpoint } = Grid;

const RightMenu = ({ user,setUser }) => {
  const { md } = useBreakpoint();

  const menu = (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item>
        <strong>
         Email: {user.email || 'Anonymous'}
        </strong>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <strong>
         Role: {user.role || 'Anonymous'}
        </strong>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="app">
        <Button  to="/" type="link" onClick={()=>{setUser({});window.location.href = '/';localStorage.removeItem('token');}}>Logout</Button>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']} >
    <div className={styles.dropdown}>
      <Button type="link">{user?user.userName:"User"}<DownOutlined /></Button>
    </div>
    </Dropdown>
  );
}

export default RightMenu;