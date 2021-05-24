import React from "react";
import { Layout, Divider } from "antd";

import "./style.css";
import Users from "./Users";

const { Sider, Content } = Layout;

const UserPage = () => {
	return (
		<div>
			<Layout>
				<Content>
					<div className="site-layout-content">
						<Users />
					</div>
				</Content>
			</Layout>
		</div>
	);
};

export default UserPage;
