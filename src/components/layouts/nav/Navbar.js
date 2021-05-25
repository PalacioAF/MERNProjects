import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import { Link } from "react-router-dom";


const Navbar = ({user}) => {

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
			<Link  to="/">
				Proyects
			</Link>
		</div>
		{user?
		(		
		<div className="menuCon">
			<div className="leftMenu">
				<LeftMenu />
			</div>
			<div className="rightMenu">
				<RightMenu user={user}/>
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
				<LeftMenu />
				<RightMenu user={user}/>
			</Drawer>

		</div>)
		:null}

	</nav>
	 );
}
 
export default Navbar;