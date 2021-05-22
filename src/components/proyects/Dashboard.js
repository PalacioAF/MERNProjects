import React, { useState } from 'react'
import { Row,Col,Card } from 'antd';
import { ReactSortable } from 'react-sortablejs'
import Task from '../tasks/task';


const Dashboard = () => {

    const [backlogItems, setBacklogItems] = useState([{id:'1',name:"backlog 1"},{id:'2',name:"backlog 2"}])
    const [todoItems, setTodoItems] = useState([{id:'3',name:"todo"}])
    const [inprogressItems, setInprogressItems] = useState([{id:'4',name:"inprogress"}])
    const [completed, setCompleted] = useState([])
        
    return ( 
        <div>
            <Row>
                <Col span={6}> 
                   <Card title="Backlog">
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={backlogItems}
                        setList={setBacklogItems}
                        >
                        {backlogItems.map(item =>{
                            return <Task key={item.id} task={item}/>
                            })}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col span={6}> 
                   <Card title="To Do">
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={todoItems}
                        setList={setTodoItems}
                        >
                        {todoItems.map(item =>{
                            return <Task key={item.id} task={item}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col span={6}> 
                   <Card title="In Progress">
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={inprogressItems}
                        setList={setInprogressItems}
                        >
                        {inprogressItems.map(item =>{
                            return <Task key={item.id} task={item}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
                <Col span={6}> 
                   <Card title="Completed">
                        <ReactSortable
                        group="issues"
                        style={{ minHeight: 500 }}
                        list={completed}
                        setList={setCompleted}
                        >
                        {completed.map(item =>{
                            return <Task key={item.id} task={item}/>
                            } )}
                        </ReactSortable>
                    </Card>
                </Col>
            </Row>
        </div>
     )
}
 
export default Dashboard;