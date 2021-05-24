import React, { useState } from 'react'
import { Row,Col,Card } from 'antd';
import { ReactSortable } from 'react-sortablejs'
import Task from '../tasks/Task';


const Dashboard = () => {

    const [backlogItems, setBacklogItems] = useState([{id:'1',name:"Page User",description:'crud User',user:'apalacio'},{id:'2',name:"Page Task",description:'crud Task',user:'apalacio'}])
    const [todoItems, setTodoItems] = useState([{id:'3',name:"Login",description:'Auth',user:'josefinaleongalli'}])
    const [inprogressItems, setInprogressItems] = useState([{id:'4',name:"Api",description:'node api',user:'josefinaleongalli'}])
    const [completed, setCompleted] = useState([])
        

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
                        {backlogItems.map(item =>{
                            return <Task key={item.id} task={item}/>
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
                        {todoItems.map(item =>{
                            return <Task key={item.id} task={item}/>
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
                        {inprogressItems.map(item =>{
                            return <Task key={item.id} task={item}/>
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