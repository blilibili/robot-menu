import React from "react";
import {Form, DatePicker, Button, Input} from "antd";

class SetIntervalMsg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitForm: {
				intervalTime: null,
				content: ''
			}
		}
	}
	onFinish = (values) => {
		console.log('Success:', values);
	};

	onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	onChangeDate = (value, dateString) => {
		const submitForm = this.state.submitForm
		submitForm.intervalTime = dateString
		this.setState({
			submitForm: submitForm
		})
	}

	setContent = (val) => {
		console.log('输入框', val)
	}

	render() {
		const { TextArea } = Input;
		const layout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 6 },
		}
		const config = {
			rules: [{ type: 'object', required: true, message: 'Please select time!' }],
		};

		const tailLayout = {
			wrapperCol: { offset: 4, span: 16 },
		};

		return (
			<div>
				<Form
				{...layout}
				name="basic"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
				onFinishFailed={this.onFinishFailed}
				>
					<Form.Item
					label="请输入设置时间"
					name="intervalTime"
					rules={[{ required: true, message: '请选择设置时间' }]}
					>
						<DatePicker onChange={this.onChangeDate} showTime format="YYYY-MM-DD HH:mm:ss" />
					</Form.Item>

					<Form.Item
					label="请输入设置定时任务的内容"
					name="content"
					rules={[{ required: true, message: '请输入定时内容' }]}
					>
						<TextArea rows={4} onChange={this.setContent} style={{width: 460}} />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type='primary'>设置</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export default SetIntervalMsg
