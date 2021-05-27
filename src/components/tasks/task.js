import React from 'react';
import { Card } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Task = ({task, setTask}) => {

    const onIconClick=()=>{
        setTask(task)
    }


    return ( 
        <Card title= {task.name} key={task._id} hoverable extra={<SettingOutlined key="setting"  onClick={onIconClick} />} style={{ marginBottom: 10 }}>
            <Meta title={task.description} description={task.user} />
        </Card>
     );
}
 
export default Task;