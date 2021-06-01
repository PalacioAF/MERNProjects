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
                try{
                    console.log("proyect")		
                    const response=await AxiosClient.get('/api/proyect');
                    setProyects(response.data.output)
                }catch(error){
                    console.log(error)
                }

            }
            getProyects()
    },[])

    //Resetar cada vez que cambio de proyecto
    useEffect(()=>{
        const getTasks=async()=>{
            if(typeof proyect.name !='undefined'){
                setTask({})
                //consulto las tareas del proyecto seleccionado
                try{
                const response=await AxiosClient.get(`/api/task?proyect=${proyect._id}`);
                setTasks(response.data.output)
                }catch(error){
                    console.log(error)
                }
            }
        }
        getTasks()
    },[proyect])

    const getTasks=async()=>{
        try{
        const response=await AxiosClient.get(`/api/task?proyect=${proyect._id}`);
        setTasks(response.data.output)
        }catch(error){
            console.log(error)
        }
    }

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
        setTask({})
      };

    return ( 
        <div>
            <Layout>
                <Content>
                    <div className="site-layout-content">
                    <Row>
                        <Col span={24}>
                            <ProyectDropdown proyects={proyects} setProyect={setProyect} setTasks={setTasks}/>
                            {typeof proyect.name !='undefined'?
                            <AddButton showModal={showModal}/>
                            :null}
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Dasboard tasks={tasks} setTask={setTask} getTasks={getTasks}/>
                        </Col>
                    </Row>
                    </div>
                </Content>
                <Modal title="Task" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <TaskForm setIsModalVisible={setIsModalVisible} task={task} setTask={setTask} proyect={proyect}  getTasks={getTasks}/>
                </Modal>
            </Layout>
        </div>
     );
}
 
export default Proyects;