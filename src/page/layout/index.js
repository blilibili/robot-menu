import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
	Redirect
} from "react-router-dom"
import Menu from './menu/menu'
import './layout.css'

class Layout extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div className='container-box'>
			<Menu />
			<div className='header'></div>
			<div className='content-box'>
				{this.props.children}
			</div>
		</div>
		);
	}
}

export default Layout
