import React from 'react';
import Layout from "./layout";
import ServeRouter from '../router/serveRouter/index'
import './home.css'

class HomeIndex extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
			<div className='container-box-header'>
				机器人设置
			</div>
			<Layout style={{padding: 15}}>
				<ServeRouter />
			</Layout>
		</div>
		)
	}
}

export default HomeIndex
