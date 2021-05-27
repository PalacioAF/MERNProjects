import React,{useState,useEffect} from 'react';
import { Layout,Row,Col,Modal } from 'antd'
import Dasboard from './Dashboard'
import AddButton from '../tasks/TaskAddButton'
import  './style.css'
import ProyectDropdown from './ProyectDropdown';
import TaskForm from '../tasks/TaskForm';
import AxiosClient from '../../config/axios'

const { Content } = Layout;

const Proyects = () => {

    //Proyectos
    const [proyects, setProyects] = useState([])
    //Proyecto Seleccionado
    const [proyect, setProyect] = useState({})
    //Tareas del un Proyecto seleccionado
    const [tasks, setTasks] = useState([])
    //Tarea Seleccionada
    const [task, setTask] = useState({})

    //Cuando se inicie el componente buscar los proyectos
    useEffect(()=>{
            const getProyects=async ()=>{
            console.log("proyect")		
            const response=await AxiosClient.get('/api/proyect');
            setProyects(response.data.output)
            }
            getProyects() 
    },[])

    //Si selecciono una tarea ejecutar
    useEffect(()=>{
        if(typeof task.name !='undefined'){
            showModal(true)
        }
    },[task])

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
      }

    const handleCancel = () => {
        setIsModalVisible(false)
      };

    return ( 
        <div>
            <Layout>
                <Content>
                    <div className="site-layout-content">
                    <Row>
                        <Col span={24}>
                            <ProyectDropdown proyects={proyects} setProyect={setProyect} setTasks={setTasks}/>
                            <AddButton showModal={showModal}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Dasboard tasks={tasks} setTask={setTask}/>
                        </Col>
                    </Row>
                    </div>
                </Content>
                <Modal title="Task" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <TaskForm setIsModalVisible={setIsModalVisible} task={task} setTask={setTask} proyect={proyect}/>
                </Modal>
            </Layout>
        </div>
     );
}
 
export default Proyects;