import React from 'react';
import { Card ,Popconfirm,notification } from 'antd';
import { EditOutlined,DeleteOutlined  } from '@ant-design/icons';
import AxiosClient from '../../config/axios'

const { Meta } = Card;

const Task = ({task, setTask, getTasks }) => {

    const onIconClick=()=>{
        setTask(task)
    }

    const confirm=async ()=> {
        const response=await AxiosClient.delete(`/api/task/${task._id}`)
        notification.success({
            message: response.data.msg
        })
        getTasks()
    }
      

    return ( 
        <Card title= {task.name} key={task._id} hoverable  style={{ marginBottom: 10 }}
        actions={[
        <EditOutlined  key="edit"  onClick={onIconClick} />,
        <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        >
        <DeleteOutlined key="delete"  />
        </Popconfirm>,
        ]} >
            <Meta title={task.description} description={task.user.userName} />
        </Card>
     );
}
 
export default Task;