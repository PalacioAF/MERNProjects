import React from 'react';
import { Layout } from 'antd';
import  './style.css'

const { Sider, Content } = Layout;

const Proyects = () => {
    return ( 
        <div>
            <Layout>
                <Sider className="site-layout-background">
                    Sider
                </Sider>
                <Content>
                    <div className="site-layout-content">
                        <h1>Proyects</h1>
                    </div>
                </Content>
            </Layout>
        </div>
     );
}
 
export default Proyects;