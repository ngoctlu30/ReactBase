import React from "react";

import { ConfigProvider, Form, Input, Button } from "antd";

export default function Login() {
	const validateMessages = {
		// eslint-disable-next-line no-template-curly-in-string
		required: "'${name}' is required!"
	};
	const initialValues = {
		username: "",
		password: ""
	};

	return (
		<ConfigProvider form={{ validateMessages }}>
			<Form scrollToFirstError={true} initialValues={initialValues}>
				<Form.Item
					name="username"
					rules={[{ required: true, message: "Hãy nhập tên tài khoản" }]}
				>
					<Input placeholder="User name" />
				</Form.Item>
				<Form.Item>
					<Button>Đăng nhập</Button>
				</Form.Item>
			</Form>
		</ConfigProvider>
	);
}
