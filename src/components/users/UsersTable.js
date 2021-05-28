import React from "react";
import { Table } from "antd";

const UsersTable = ({ users }) => {
	const columns = [
		{
			title: "USERNAME",
			dataIndex: "userName",
			key: "username",
			render: (user) => <i>{user}</i>
		},
		{
			title: "EMAIL",
			dataIndex: "email",
			key: "email"
		},
		{
			title: "ROLE",
			dataIndex: "role",
			key: "role"
		}
	];

	return (
		<div>
			<Table dataSource={users} columns={columns} />
		</div>
	);
};

export default UsersTable;
