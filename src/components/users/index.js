import React, { useState, useEffect } from "react";
import { Layout, Modal, Row, Col } from "antd";
import AddUser from "./AddUser";
import "./style.css";
import UsersTable from "./UsersTable";
import UserForm from "./UserForm";
import AxiosClient from "../../config/axios";

const { Content } = Layout;

const UsersPage = () => {
	//Cambio el estado de los users
	const [users, setUsers] = useState([]);

	//Cambio el estado de un user seleccionado
	const [user, setUser] = useState({});

	
	useEffect(()=>{
		if(typeof user.userName !='undefined')
		{
		showModal(true)
    }
	},[user])


	//Obtengo todos los usuarios del endpoint
	const getAllUsers = async () => {
		const response = await AxiosClient.get("/api/user");
		//guardo los datos de la respuesta en la variable users
		setUsers(response.data.output);
	};

	//Efectuo la funcion apenas se abre la pagina
	useEffect(() => {
		getAllUsers();
	}, []);

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
								<AddUser showModal={showModal} />
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<UsersTable users={users} showModal={showModal} setUser={setUser} />
							</Col>
						</Row>
					</div>
				</Content>
				<Modal
					title="Add User"
					visible={isModalVisible}
					footer={null}
					onCancel={handleCancel}
				
				>
					<UserForm
						getAllUsers={getAllUsers}
						setIsModalVisible={setIsModalVisible}
						setUser={setUser}
						user={user}
						
					/>
				</Modal>
			</Layout>
		</div>
	);
};

export default UsersPage;
