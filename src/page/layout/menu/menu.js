import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


class MenuList extends React.Component{
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	render() {
		return (
		<div style={{ width: 256 }}>
			<Menu
			style={{height: '100%'}}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode="inline"
			theme="dark"
			inlineCollapsed={this.state.collapsed}
			>
				<SubMenu key="sub1" icon={<MailOutlined />} title="一般操作">
					<Menu.Item key="1" icon={<PieChartOutlined />}>
						修改第二天的id
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						设置企微定时任务
					</Menu.Item>
				</SubMenu>
			</Menu>
		</div>
		)
	}
}

export default MenuList
