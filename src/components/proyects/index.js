import React from 'react';
import { Layout,Divider } from 'antd';
import ProyectsList from './ProyectsList';
import  './style.css'
import Dasboard from './Dashboard';

const { Sider, Content } = Layout;

const Proyects = () => {
    return ( 
        <div>
            <Layout>
                <Sider className="site-layout-background">
                    <ProyectsList/>
                </Sider>
                <Divider type="vertical"  style={{ height: "100%" }}/>
                <Content>
                    <div className="site-layout-content">
                        <Dasboard/>
                    </div>
                </Content>
            </Layout>
        </div>
     );
}
 
export default Proyects;