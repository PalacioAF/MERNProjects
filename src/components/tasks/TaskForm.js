import React,{useState,useEffect} from 'react'
import { Input,Form,Button } from 'antd'
import AxiosClient from '../../config/axios'

const TaskForm = ({setIsModalVisible,task,setTask,proyect}) => {

    

    const [state, setstate] = useState({name:'', description:'', status:'',proyect:'',user:''})

    useEffect(()=>{
        if(typeof task.name !='undefined'){
            form.setFieldsValue(task)
        }
        else{
            form.setFieldsValue(state)
        }
    },[task])


    const [form] = Form.useForm()

    form.setFieldsValue(state)

    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!'
    } 

    const onFinish=async ()=>{
        const {name,description,status,user}=form.getFieldsValue()
        let response
        let params
        //Si task esta vacio se hace un post, de lo contrario un put
        if(typeof task.name =='undefined'){

        params={
            name:name,
            description:description,
            proyect:proyect._id,
            user:user
        }    
        response=await AxiosClient.post('/api/task',params);
        }
        else{
        params={
            name,description,user
        }    
        response=await AxiosClient.put(`/api/task/${task._id}`,params); 
        setTask({})  
        }
        console.log(response)



        setIsModalVisible(false)
    }

    return ( 
        <Form layout="vertical" form={form} validateMessages={validateMessages} hideRequiredMark onFinish={onFinish}>
            <Form.Item name="name" label="Name" className="mb-1 mt-1" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description" className="mb-1 mt-1" rules={[{ required: true }]}>
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