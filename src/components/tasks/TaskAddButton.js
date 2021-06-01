import React from 'react';
import { Button,Tooltip } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const AddButton = ({showModal}) => {
    return ( 
        <Tooltip title="Add Task">
            <Button type="primary" 
            style={{ marginBottom: '16px', float:'right' }} 
            icon={<PlusCircleFilled />}
            size="large"
            shape="round"
            onClick={showModal}
            >
                Add Task
            </Button>
        </Tooltip>
     );
}
 
export default AddButton;