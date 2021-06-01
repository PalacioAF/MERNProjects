import React, { useState, useEffect } from "react";
import { Input, Form, Button,Select,notification } from "antd";
import AxiosClient from "../../config/axios";

const UserForm = ({ setIsModalVisible, user, setUser, getAllUsers }) => {


	const [btnLabel, setBtnLabel] = useState("Add")

	const [form] = Form.useForm();

	//EDITO O AGREGO
	useEffect(() => {
		if (typeof user.userName != "undefined") {
			form.setFieldsValue({	firstName:user.firstName,
			lastName:user.lastName,
			userName: user.userName,
			email: user.email,
			password: user.password,
			role: user.role,
			status:user.status});
			setBtnLabel("Edit")
		} else {
			setBtnLabel("Add")
			form.setFieldsValue(
				{
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				password: "",
				role: "",
				status: ""});
		}
	}, [form,user]);


	const validateMessages = {
		// eslint-disable-next-line
		required: "${label} is required!"
	};

	const onFinish = async () => {
		try{
		const { firstName, lastName, userName, email, password, role ,status } =
			form.getFieldsValue();
		let response;
		let params;
		//Si task esta vacio se hace un post, de lo contrario un put
		if (typeof user.userName == "undefined") {
			params = {
				firstName: firstName,
				lastName: lastName,
				userName: userName,
				email: email,
				password: password,
				role: role
			};
			response = await AxiosClient.post("/api/user", params);
		} else {
			params = {
				firstName,
				lastName,
				userName,
				email,
				password,
				role,
				status
			};
			response = await AxiosClient.put(`/api/user/${user._id}`, params);
			
		}
		console.log(response);
		notification.success({
			message: response.data.msg
	})
		setIsModalVisible(false);
		setUser({});
		getAllUsers();
	}catch(error){
		notification.error({
				message: error
				})
		setIsModalVisible(false)
		getAllUsers()    
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
				name="firstName"
				label="FirstName"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="lastName"
				label="LastName"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="userName"
				label="UserName"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="email"
				label="Email"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="Password"
				className="mb-1 mt-1"
				rules={[{ required: true }]}			>
				<Input type="password" />
			</Form.Item>
			<Form.Item
				name="role"
				label="Role"
				className="mb-1 mt-1"
				rules={[{ required: true }]}>
				<Select defaultValue="admin" style={{ width: 120 }} onChange={handleChange}>
      		<Option value="user">user</Option>                
         	<Option value="admin">admin</Option>
				</Select>
			</Form.Item>
			{typeof user.userName != "undefined" ? 
						<Form.Item
						name="status"
						label="Status"
						className="mb-1 mt-1"
						rules={[{ required: true }]}			>				 
					<Select style={{ width: 120 }} onChange={handleChange}>
							 <Option value="enabled">enabled</Option>
							<Option value="disabled">disabled</Option>
						</Select>
					</Form.Item>
			: null}
			<Form.Item>
				<Button type="primary" htmlType="submit"  style={{ float:'right' }}>
					{btnLabel}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
