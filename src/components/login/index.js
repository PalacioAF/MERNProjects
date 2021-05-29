import React from "react";
import { useNavigate  } from "react-router-dom";
import { Row, Form, Input, Button, Divider } from "antd";
import AxiosClient from "../../config/axios"

const LoginPage = ({setAuth}) => {
	let navigate = useNavigate();

	const [form] = Form.useForm()

    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!'
    } 

    const onFinish=async ()=>{
		try{
			const {email,password}=form.getFieldValue()
			const params ={email,password}
			const response=await AxiosClient.post('/api/login',params);
			localStorage.setItem('token',response.data.token);
			setAuth(true)
			navigate('proyects');
		}catch (error){

		}
    }

	return (
		<div>
			<Divider orientation="center">LOGIN FORM</Divider>
			<Row style={{ padding: "5% " }} align="center" justify="center">
				<Form form={form} validateMessages={validateMessages} hideRequiredMark onFinish={onFinish}>
					<Form.Item
						label="Email"
						name="email"
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true }]}
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
