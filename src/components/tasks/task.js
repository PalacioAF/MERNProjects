import React from 'react';
import { Card } from 'antd';

const Task = ({task}) => {
    return ( 
        <Card title="Inner Card title" key={task.id}>
            {task.name}
        </Card>
     );
}
 
export default Task;