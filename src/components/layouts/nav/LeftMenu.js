import React from 'react';
import { Menu, Grid } from 'antd';
import { DesktopOutlined, UserOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";


const { useBreakpoint } = Grid;

const LeftMenu = ( {user} ) => {

  const { md } = useBreakpoint()
  return (
    <Menu theme="light" mode={md ? "horizontal" : "inline"}>
        <Menu.Item key="1" icon={<DesktopOutlined />}>
            <NavLink to="/proyects">
              Proyects
            </NavLink>
        </Menu.Item>
        {user.role==="admin"?
        <>
        <Menu.Item key="2" icon={<UserOutlined />} >
            <NavLink  to="/users">
              Users
            </NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<DeploymentUnitOutlined />} >
            <NavLink  to="/teams">
              Teams
            </NavLink>
        </Menu.Item>
        </>
        :null}

    </Menu>
  );
}

export default LeftMenu;