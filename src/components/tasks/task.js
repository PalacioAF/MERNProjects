import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Task = ({task}) => {
    return ( 
        <Card title= {task.name} key={task.id} hoverable style={{ marginBottom: 10 }}>
            <Meta title={task.description} description={task.user} />
        </Card>
     );
}
 
export default Task;