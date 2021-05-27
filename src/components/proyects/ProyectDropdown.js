import React,{useState} from 'react';
import { Dropdown,Button } from 'antd';
import ProyectsList from './ProyectsList'
import { DownOutlined } from '@ant-design/icons';
import AxiosClient from "../../config/axios"

const ProyectDropdown = ({proyects,setProyect,setTasks}) => {

    const[state,setState]=useState(false)

    const[title,setTitle]=useState("Proyect")


    //cuando seleccione un proyecto ejecutar setTitle 
    
    const handleMenuClick =async ({ key }) => {
    setState( false )
    //Cambio el placeholder
    setTitle(proyects.filter(proyect=>proyect._id===key)[0].name)
    setProyect(proyects.filter(proyect=>proyect._id===key)[0])
    //consulto las tareas del proyecto seleccionado
    const response=await AxiosClient.get(`/api/task?proyect=${key}`);
    setTasks(response.data.output)
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