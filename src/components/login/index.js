import React, { useState } from "react";
import { Row, Form, Input, Button, Divider } from "antd";

const LoginPage = () => {
	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const [user, setUser] = useState({
		username: "",
		password: ""
	});

	const { username, password } = user;

	return (
		<div>
			<Divider orientation="center">LOGIN FORM</Divider>
			<Row style={{ padding: "5% " }} align="center" justify="center">
				<Form>
					<Form.Item
						label="Username"
						name="username"
						value={username}
						onChange={onChange}
						rules={[
							{
								required: true,
								message: "Please input your username!"
							}
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						value={password}
						onChange={onChange}
						rules={[
							{
								required: true,
								message: "Please input your password!"
							}
						]}
					>
						<Input.Password />
					</Form.Item>
					<Row style={{ padding: "5% " }} align="center" justify="center">
						<Button type="primary" htmlType="submit" sized="middle">
							Login
						</Button>
					</Row>
				</Form>
			</Row>
		</div>
	);
};

export default LoginPage;
