import React, { useState, useEffect } from "react";
import { Input, Form, Button,Select,notification } from "antd";
import AxiosClient from "../../config/axios";

const ProyectForm = ({ setIsModalVisible, proyect, setProyect, getAllProyects,users}) => {
	//Seteo el nuevo user
	
	const [newProyect, setNewProyect] = useState({
    name: "",
  description:"",
  creator:"",
  team: []
	});

	const [form] = Form.useForm();
	//EDITO O AGREGO
	useEffect(() => {
		if (typeof proyect.name != "undefined") {
			form.setFieldsValue({name:proyect.name,
			description:proyect.description,
			creator:proyect.creator._id,
			team: proyect.team.map(user => {return  user._id} )
		});
			console.log(proyect.team)
		} else {
			form.setFieldsValue(newProyect);
		}
	}, [form,proyect]);


	form.setFieldsValue(newProyect);

	const validateMessages = {
		// eslint-disable-next-line
		required: "${label} is required!"
	};

	const onFinish = async () => {
		try{
		const {  name,description,creator,team } = 
			form.getFieldsValue();
		let response;
		let params;
		//Si task esta vacio se hace un post, de lo contrario un put
		if (typeof proyect.name == "undefined") {
			params = {
				name: name,        
        description:description, 
        creator:creator,
        team: team
			};
			response = await AxiosClient.post("/api/proyect", params);
		} else {
			params = {
        name,        
        description, 
        creator,
        team
			};
			response = await AxiosClient.put(`/api/proyect/${proyect._id}`, params);
			setProyect({});
		}
		console.log(response);
		notification.success({
			message: response.data.msg
	})

		setIsModalVisible(false);
		getAllProyects();
	}
catch(error){
		notification.error({
				message: error
				})
		setIsModalVisible(false)
		getAllProyects()    
}
}



	const { Option } = Select;
	function handleChange(value) {
		console.log(`selected ${value}`);
	}

	return (
		<Form
			form={form}
			layout="vertical"
			validateMessages={validateMessages}
			hideRequiredMark
			onFinish={onFinish}
		>
			<Form.Item
				name="name"
				label="ProyectName"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="description"
				label="Description"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="creator"
				label="Creator"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Select   >
                    {users.map(user => (
                    <Option key={user._id} value={user._id}>{user.userName}</Option>
                    ))}
                </Select>
			</Form.Item>
			<Form.Item
				name="team"
				label="Team"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				 <Select  mode="multiple"  >
                    {users.map(user => (
                    <Option key={user._id} value={user._id}>{user.userName}</Option>
                    ))}
                </Select>
			</Form.Item>			
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Add
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ProyectForm;
