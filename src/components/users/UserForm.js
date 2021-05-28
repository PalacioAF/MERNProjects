import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "antd";
import AxiosClient from "../../config/axios";

const UserForm = ({ setIsModalVisible, user, setUser, getAllUsers }) => {
	//Seteo el nuevo user
	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
		role: ""
	});

	//EDITO O AGREGO
	useEffect(() => {
		if (typeof user.name != "undefined") {
			form.setFieldsValue(user);
		} else {
			form.setFieldsValue(newUser);
		}
	}, [user]);

	const [form] = Form.useForm();

	form.setFieldsValue(newUser);

	const validateMessages = {
		// eslint-disable-next-line
		required: "${label} is required!"
	};

	const onFinish = async () => {
		const { firstName, lastName, userName, email, password, role } =
			form.getFieldsValue();
		let response;
		let params;
		//Si task esta vacio se hace un post, de lo contrario un put
		if (typeof user.name == "undefined") {
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
				role
			};
			response = await AxiosClient.put(`/api/user/${user._id}`, params);
			setUser({});
		}
		console.log(response);

		setIsModalVisible(false);
		getAllUsers();
	};

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
				label="firstName"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="lastName"
				label="lastName"
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
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="role"
				label="role"
				className="mb-1 mt-1"
				rules={[{ required: true }]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Add
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
