import React from 'react';
import { Menu } from 'antd';

const ProyectsList = ({ proyects,handleMenuClick }) => {

    return ( 
        <Menu onClick={handleMenuClick}>
                {proyects.map(proyect=>(
                    <Menu.Item key={proyect._id}>{proyect.name}</Menu.Item>
                ))}
        </Menu>
    )
}
 
export default ProyectsList