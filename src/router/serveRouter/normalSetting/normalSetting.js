import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const UpdateNextPersonId = React.lazy(() => import('../../../page/normalSetting/page/updateNextPersonId'));
const SetIntervalMsg = React.lazy(() => import('../../../page/setIntervalMsg/index'));

class NormalSetting extends React.Component{
	render() {
		return (
			<>
				<Route path='/setting' render={
					props => {
						return (
						<Suspense fallback={<div>loading...</div>}>
							<UpdateNextPersonId />
						</Suspense>
						)
					}
				}>
				</Route>

				<Route path='/intervalMsg' render={
					props => {
						return (
						<Suspense fallback={<div>loading...</div>}>
							<SetIntervalMsg />
						</Suspense>
						)
					}
				}>
				</Route>
			</>
		)
	}
}

export default NormalSetting
