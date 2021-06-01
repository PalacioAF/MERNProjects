import React from 'react';
import {Row,Col,Layout,Divider,Card}  from "antd"
import Cards from './Cards';
import img1 from "../../img/josefinaleon.jpg"


const { Content } = Layout;
const contacts = [{
  id: "1",
  name: "Josefina Leon Galli",
  img: img1,
  git:"https://github.com/josefinaleong",
  linkedin:"https://www.linkedin.com/in/josefina-leon-galli-a49332207/"
},
{ id:"2",
  name: "Alberto Federico Palacio",
  img: img1,
  git:"https://github.com/PalacioAF",
  linkedin:""
}]

const AboutUs = () =>{
  return(
            <>
              <Divider orientation="center">Contact Us</Divider>               
              <Row style={{ padding: "5% " }} align="center" justify="center">
                    <Row gutter={24}>
                      {contacts.map(contact=>{
                        return (<Col span={12}>
                        <Cards contact={contact} key={contact.id}/>
                      </Col>)
                      })}                     
                    </Row>
              </Row>      
              </>
    
  )
}


export default AboutUs
