import React, { useState,useEffect } from 'react'
import { Row,Col,Card } from 'antd';
import { ReactSortable } from 'react-sortablejs'
import Task from '../tasks/Task';


const Dashboard = ({tasks,setTask}) => {

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
                        >
                        {backlogItems.map(task =>{
                            return <Task key={task._id} task={task} setTask={setTask}/>
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
                        >
                        {todoItems.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask}/>
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
                        >
                        {inprogressItems.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask}/>
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
                        >
                        {completed.map(task =>{
                            return <Task key={task._id} task={task}  setTask={setTask}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
            </Row>
        </div>
     )
}
 
export default Dashboard;