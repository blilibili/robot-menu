import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const updateNextPersonId = React.lazy(() => import('../../page/normalSetting/page/updateNextPersonId'));

class normalSetting extends React.Component{
	render() {
		return (
			<>
				<Route path="/setting" component={updateNextPersonId} />
			</>
		)
	}
}

export default normalSetting
