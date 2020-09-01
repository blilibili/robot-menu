import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeIndex from "../page/home";

class RouterIndex extends React.Component{
	render() {
		return (
		<Router basename="/">
			<Switch>
				{/*<Route exact path="/login" component={LoginPage} />*/}
				<Route path="/" component={HomeIndex} />
			</Switch>
		</Router>
		)
	}
}

export default RouterIndex
