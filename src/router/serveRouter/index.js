import React from "react";
import NormalSettingRoute from '../serveRouter/normalSetting/normalSetting'
const files = require.context('.', true, /\.js$/)
let allServeRouterJs = files.keys().slice(1)

const componentList = []

class ServeRouter extends React.Component{

	render() {
		return (
			<>
				<NormalSettingRoute />
			</>
		)
	}
}

export default ServeRouter
