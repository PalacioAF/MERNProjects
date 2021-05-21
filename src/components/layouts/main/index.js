import React from 'react'
import { Layout } from 'antd';
import Navbar from '../nav/Navbar';
import { Routes,Route } from "react-router-dom";
import Proyects from "../../proyects";
import Users from "../../users"
import Teams from "../../team"
import  './style.css'


const LayoutMain = () => {
    const { Header, Content, Footer } = Layout;

    return ( 
        <div>
          <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header style={{background: '#fff'}}> 
              <Navbar /> 
            </Header>
            <Content style={{ padding: '0 20px',marginTop:'10px',marginBottom:'20px' }}>
              <div className="site-layout-content">
                  <Routes>
                    <Route path="/proyects" element={<Proyects/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/teams" element={<Teams/>}/>
                  </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Proyects ©2021 Created by Galli and Palacio</Footer>
          </Layout>
        </div>
     );
}
 
export default LayoutMain;