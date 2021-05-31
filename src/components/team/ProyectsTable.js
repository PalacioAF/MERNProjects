import React from "react";
import { Table,Tag} from "antd";
import { EditOutlined,DeleteOutlined,Popconfirm} from '@ant-design/icons';
import {useFilter} from "../../hook/useFilter"



const ProyectsTable = ({ proyects,setProyect,handleDelete}) => {
	const {getColumnSearchProps}=useFilter()

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			...getColumnSearchProps('Name','name')
			
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		
		},
		{
			title: "Creator",
			dataIndex: "creator",
			key: "creator",			
			render: creator => (<>{creator.userName}</>),
			
		},
		{
			title: "Team",
			dataIndex: "team",
			key: "team",				
    	render: team => (
			<>{team.map(user =>
				{    
          return (
						<Tag color="blue">
								{user.userName.toUpperCase()}							
						</Tag>            
          );
        })
				}
      </>)
		},	
		{  	title: "ACTIONS",
				key: "actions",
				render: (row) =><>
				 <EditOutlined  key="edit" onClick={()=>setProyect(row)} />			
         <DeleteOutlined key="delete" onClick={()=>handleDelete(row)}/>      
				</>		
		}
	];

	return (
		<div>
			<Table dataSource={proyects} columns={columns} />
		</div>
	);
};

export default ProyectsTable;
