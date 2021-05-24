import React,{useState} from 'react';
import { Dropdown,Button } from 'antd';
import ProyectsList from './ProyectsList'
import { DownOutlined } from '@ant-design/icons';

const ProyectDropdown = () => {

    const proyects=[{id:'1',name:'Alfa'},{id:'2',name:'Beta'}]

    const[state,setState]=useState(false)

    const[title,setTitle]=useState("Proyect")


    //cuando seleccione un proyecto ejecutar setTitle 
    
    const handleMenuClick =({ key }) => {
    console.log(key)
    setState( false )
    //temporal
    const temp=proyects.filter(proyect=>proyect.id===key.toString())
    console.log(temp)
    setTitle(temp[0].name)
    }

    const handleVisibleChange = flag => {
    setState(flag )
    }

    return ( 
        <Dropdown
        overlay={<ProyectsList proyects={proyects} handleMenuClick={handleMenuClick}/>}
        onVisibleChange={handleVisibleChange}
        visible={state}
        >
        <Button type="link">{title}<DownOutlined /></Button>
      </Dropdown>
     );
}
 
export default ProyectDropdown;