import React from 'react';
import { Button,List } from 'antd';


const Proyect = ({proyect}) => {
    return ( 
            <List.Item key={proyect.id}>
                <Button type="link">{proyect.name}</Button>
            </List.Item>
     );
}
 
export default Proyect;