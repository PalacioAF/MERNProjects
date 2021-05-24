import React,{useState,useEffect} from 'react'
import { Input,Form,Button } from 'antd'

const TaskForm = ({setIsModalVisible}) => {

    const selectedTask={}

    const [state, setstate] = useState({name:'', description:'', status:'',proyect:'',user:''})


    const [form] = Form.useForm()

    form.setFieldsValue(state)

    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!'
    } 

    const onFinish=()=>{
        setIsModalVisible(false)
    }

    return ( 
        <Form layout="vertical" form={form} validateMessages={validateMessages} hideRequiredMark onFinish={onFinish}>
            <Form.Item name="name" label="Name" className="mb-1 mt-1" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="Description" label="description" className="mb-1 mt-1" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="user" label="user" className="mb-1 mt-1" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
     );
}
 
export default TaskForm;