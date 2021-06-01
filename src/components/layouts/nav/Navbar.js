import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';


const Navbar = ({ user,setUser }) => {

	const[state,setState]=useState({
		visible: false
	})

	const showDrawer = () => {
		setState({
			visible: true,
		})
	};

	const onClose = () => {
		setState({
			visible: false,
		})
	};

	return ( 
		<nav className="menuBar">
		<div className="logo">
			<Button type="link" className="a">ToPlan</Button>
		</div>
		{typeof user.userName !='undefined'?
		<div className="menuCon">
			<div className="leftMenu">
				<LeftMenu user={user} />
			</div>
			<div className="rightMenu">
				<RightMenu user={user} setUser={setUser}/>
			</div>
			<Button className="barsMenu" type="primary" onClick={showDrawer}>
				<span className="barsBtn"></span>
			</Button>
			<Drawer
				title="Basic Drawer"
				placement="right"
				closable={false}
				onClose={onClose}
				visible={state.visible}
			>
				<LeftMenu user={user} />
				<RightMenu user={user} setUser={setUser}/>
			</Drawer>
		</div>
		:null}

	</nav>
	 );
}
 
export default Navbar;