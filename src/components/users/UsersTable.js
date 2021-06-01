import React from "react";
import { Table,Tag} from "antd";
import { EditOutlined} from '@ant-design/icons';
import {useFilter} from "../../hook/useFilter"

const UsersTable = ({ users,setUser}) => {
	const {getColumnSearchProps}=useFilter()


	const columns = [
		{
			title: "First Name",
			dataIndex: "firstName",
			key: "firstname",
			
		},
		{
			title: "Last Name",
			dataIndex: "lastName",
			key: "lastname",
			...getColumnSearchProps('Last Name','lastName')
		
		},
		{
			title: "User Name",
			dataIndex: "userName",
			key: "username",
			
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			...getColumnSearchProps('Email','email')
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
			filters: [
				{
					text: 'admin',
					value: 'admin',
				},
				{
					text: 'user',
					value: 'user',
				},
			],
			onFilter: (value, record) => record.role.indexOf(value) === 0,
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			filters: [
				{
					text: 'enabled',
					value: 'enabled',
				},
				{
					text: 'disabled',
					value: 'disabled',
				},
			],
			onFilter: (value, record) => record.status.indexOf(value) === 0,
			render: (status,row) =>( <>
			 <Tag color={status=== "enabled" ? "green":"red" } key={row._id} >
				{row.status}
				</Tag></>  ) 			
		},
		{
			title: "ACTIONS",
	    key: "actions",
	    render: (row) => <EditOutlined  key="edit" onClick={()=>setUser(row)} />
		}
	];

	return (
		<div>
			<Table dataSource={users} columns={columns} rowKey="_id" />
		</div>
	);
};

export default UsersTable;
