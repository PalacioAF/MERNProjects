import React, { useState,useEffect } from 'react'
import { Row,Col,Card } from 'antd';
import { ReactSortable } from 'react-sortablejs'
import Task from '../tasks/Task';
import AxiosClient from '../../config/axios'

const Dashboard = ({tasks,setTask,getTasks}) => {

    const [backlogItems, setBacklogItems] = useState([])
    const [todoItems, setTodoItems] = useState([])
    const [inprogressItems, setInprogressItems] = useState([])
    const [completed, setCompleted] = useState([])
        
    useEffect(()=>{
            if(tasks){
                setBacklogItems(tasks.filter(task=>task.status==='Backlog'))
                setTodoItems(tasks.filter(task=>task.status==='ToDo'))
                setInprogressItems(tasks.filter(task=>task.status==='InProgress'))
                setCompleted(tasks.filter(task=>task.status==='Completed'))
            }
    },[tasks])

    //Posicion en el array y state seleccionado
    const [index, setIndex] = useState({})
    //controlo la finalizacion del movimiento entre state
    const [end, setEnd] = useState(false)

    useEffect(()=>{
        if(typeof index.id !='undefined'&& end){
            let task
            switch (index.status){
                case 'Backlog':
                    task=backlogItems[index.id]
                    setStatus(task,index.status)
                break
                case 'ToDo':
                    task=todoItems[index.id]
                    setStatus(task,index.status)
                break
                case 'InProgress':
                    task=inprogressItems[index.id]
                    setStatus(task,index.status)
                break
                case 'Completed':
                    task=completed[index.id]
                    setStatus(task,index.status)
                break
                default:
                break    
            }
            setIndex({})
            setEnd(false)
        }
    },[index,end,backlogItems,todoItems,inprogressItems,completed])

    const setStatus=async(task,status)=>{
        try {
            const {name,description,user}=task
            const params={
                name,
                description,
                user,
                status
            }
            const response=await AxiosClient.put(`/api/task/${task._id}`,params); 
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <Row justify="space-around" align="middle">
                <Col sm={24} md={10} lg={5}  className="dashboard-col"> 
                   <Card title="Backlog" bodyStyle={{backgroundColor: '#ececec' }} >
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={backlogItems}
                        setList={setBacklogItems}
                        onAdd={(e) => setIndex({id:e.newIndex,status:"Backlog"})}
                        onEnd={()=>setEnd(true)}
                        >
                        {backlogItems.map(task =>{
                            return <Task key={task._id} task={task} setTask={setTask} getTasks={getTasks}/>
                            })}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col sm={24} md={10} lg={5} className="dashboard-col"> 
                   <Card title="To Do" bodyStyle={{backgroundColor: '#ececec' }} >
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={todoItems}
                        setList={setTodoItems}
                        onAdd={(e) => setIndex({id:e.newIndex,status:"ToDo"})}
                        onEnd={()=>setEnd(true)}
                        >
                        {todoItems.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask} getTasks={getTasks}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col sm={24} md={10} lg={5} className="dashboard-col"> 
                   <Card title="In Progress" bodyStyle={{backgroundColor: '#ececec' }} >
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={inprogressItems}
                        setList={setInprogressItems}
                        onAdd={(e) => setIndex({id:e.newIndex,status:"InProgress"})}
                        onEnd={()=>setEnd(true)}
                        >
                        {inprogressItems.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask} getTasks={getTasks}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col sm={24} md={10} lg={5}  className="dashboard-col"> 
                   <Card title="Completed" bodyStyle={{backgroundColor: '#ececec' }}>
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={completed}
                        setList={setCompleted}
                        onAdd={(e) => setIndex({id:e.newIndex,status:"Completed"})}
                        onEnd={()=>setEnd(true)}
                        >
                        {completed.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask} getTasks={getTasks}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
            </Row>
        </div>
     )
}
 
export default Dashboard;