import React from 'react';
import { List } from 'antd';
import Proyect from './Proyect';

const ProyectsList = () => {

    const proyects=[{id:'1',name:'Alfa'},{id:'2',name:'Beta'}]

    return ( 
        <List
        itemLayout="vertical"
        dataSource={proyects}
        renderItem={proyect => (
                <Proyect proyect={proyect}/>
         )}
        />
    )
}
 
export default ProyectsList