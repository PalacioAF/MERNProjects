import React,{useState} from 'react';
import { Layout,Row,Col,Modal } from 'antd'
import Dasboard from './Dashboard'
import AddButton from '../tasks/TaskAddButton'
import  './style.css'
import ProyectDropdown from './ProyectDropdown';
import TaskForm from '../tasks/TaskForm';

const { Content } = Layout;

const Proyects = () => {

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
                            <ProyectDropdown/>
                            <AddButton showModal={showModal}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Dasboard/>
                        </Col>
                    </Row>
                    </div>
                </Content>
                <Modal title="Task" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <TaskForm setIsModalVisible={setIsModalVisible}/>
                </Modal>
            </Layout>
        </div>
     );
}
 
export default Proyects;