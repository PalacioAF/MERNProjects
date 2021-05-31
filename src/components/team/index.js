import React, { useState, useEffect } from "react";
import { Layout, Modal, Row, Col,notification } from "antd";
import "./style.css";
import AddProyect from "./AddProyect"
import AxiosClient from "../../config/axios";
import ProyectsTable from "./ProyectsTable"
import ProyectForm from "./ProyectForm"

const { Content } = Layout;

const TeamsPage = () => {

  const [proyects, setProyects] = useState([])
  const [proyect, setProyect] = useState({});
	const [users,setUsers]=useState([])

	useEffect(()=>{
		if(typeof proyect.name !='undefined')
		{
		showModal(true)
    }
	},[proyect])

 
	 
	const getAllProyects=async ()=>{
		try{
				console.log("proyect")		
				const response=await AxiosClient.get('/api/proyect');
				setProyects(response.data.output)
		}catch(error){
				console.log(error)
		}
	}

	useEffect(()=>{	
		getAllProyects()
		getAllUsers()
},[])
	
const getAllUsers = async () => {
	const response = await AxiosClient.get("/api/user");
	//guardo los datos de la respuesta en la variable users
	setUsers(response.data.output);
};






const handleDelete = async (proyect)=> {
	const response=await AxiosClient.delete(`/api/proyect/${proyect._id}`);
	notification.success({
		message: response.data.msg
})
getAllProyects()
}
  const [isModalVisible, setIsModalVisible] = useState(false);

	//Abrir el modal
	const showModal = () => {
		setIsModalVisible(true);
	};

	//Cerrar el modal
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<div>
			<Layout>
				<Content>
					<div className="site-layout-content">
						<Row>
							<Col span={24}>
								<AddProyect showModal={showModal} />
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<ProyectsTable proyects={proyects} showModal={showModal} setProyect={setProyect} handleDelete={handleDelete}/>
							</Col>
						</Row>
					</div>
				</Content>
				<Modal
					title="Add Proyect"
					visible={isModalVisible}
					footer={null}
					onCancel={handleCancel}
				>
					<ProyectForm					
						getAllProyects={getAllProyects}
						setIsModalVisible={setIsModalVisible}
						setProyect={setProyect}
						proyect={proyect}
						users={users}
					/>
				</Modal>
			</Layout>
		</div>
	);
}

export default TeamsPage