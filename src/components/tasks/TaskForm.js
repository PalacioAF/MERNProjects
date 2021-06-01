import React,{useState,useEffect} from 'react'
import { Input,Form,Button,Select,notification } from 'antd'
import AxiosClient from '../../config/axios'

const {Option}=Select;

const TaskForm = ({setIsModalVisible,task,setTask,proyect,getTasks}) => {

    const [users, setUsers] = useState([])

    const [btnLabel, setBtnLabel] = useState("Add")

    const [form] = Form.useForm()

    //Seteo los valor dependiendo si es un alta o modificacion
    useEffect(()=>{
        if(typeof task.name !='undefined'){
            setBtnLabel("Edit")
            form.setFieldsValue({name:task.name, description:task.description,user:task.user._id})
        }
        else{
            setBtnLabel("Add")
            form.setFieldsValue({name:'', description:'',user:''})
        }
    },[form,task])

    //cargo los usuarios
    useEffect(()=>{
        setUsers(proyect.team)
    },[proyect])

    const onFinish=async ()=>{
        try{
            const {name,description,user}=form.getFieldsValue()
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
            }
            notification.success({
                message: response.data.msg
            })
            setTask({})  
            setIsModalVisible(false)
            getTasks()
        }catch(error){
            notification.error({
                message: error
                })
            setIsModalVisible(false)
            getTasks()    
        }
    }

    return ( 
        <Form layout="vertical" form={form} hideRequiredMark onFinish={onFinish}>
            <Form.Item name="name" label="Name" className="mb-1 mt-1" rules={[{ required: true, message: 'Name is required!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description" className="mb-1 mt-1" rules={[{ required: true , message: 'Description is required!'}]}>
                <Input />
            </Form.Item>
            <Form.Item name="user" label="User" className="mb-1 mt-1" rules={[{ required: true, message: 'User is required!' }]}>
                <Select  placeholder="User" >
                    {users.map(item => (
                    <Option key={item._id} value={item._id}>{item.userName}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit" style={{ float:'right' }} >
                    {btnLabel}
                </Button>
            </Form.Item>
        </Form>
     );
}
 
export default TaskForm;