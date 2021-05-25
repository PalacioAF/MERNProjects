import React ,{useState,useEffect} from "react";
import { Layout } from "antd";
import Navbar from "../nav/Navbar";
import { Routes, Route } from "react-router-dom";
import Proyects from "../../proyects";
import Users from "../../users";
import Teams from "../../team";
import LoginPage from "../../login";
import "../style.css";
import AxiosClient from "../../../config/axios"

const LayoutMain = () => {
	const { Header, Content, Footer } = Layout;
	const [user,setUser] =useState()
	const [auth,setAuth] =useState(false)

	useEffect(()=>{
			if(auth ){
				const getUser=async ()=>{
				console.log("main")		
				const response=await AxiosClient.get('/api/login');
				setUser(response.data.user)
				}
			getUser() 
			}
			
	},[auth])

	return (
		<div>
			<Layout className="layout" style={{ minHeight: "100vh" }}>
				<Header style={{ background: "#fff" }}>
					<Navbar user={user}/>
				</Header>
				<Content
					style={{ padding: "0 20px", marginTop: "10px", marginBottom: "20px" }}
				>
					<div className="site-layout-content">
						<Routes>
							<Route path="/" element={<LoginPage setAuth={setAuth}/>} />
							<Route path="/proyects" element={<Proyects />} />
							<Route path="/users" element={<Users />} />
							<Route path="/teams" element={<Teams />} />
						</Routes>
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Proyects ©2021 Created by Galli and Palacio
				</Footer>
			</Layout>
		</div>
	);
};

export default LayoutMain;
