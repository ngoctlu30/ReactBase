import { Layout, Menu } from "antd";
import React, { FunctionComponent, useCallback, useState } from "react";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from "@ant-design/icons";

import "../styles/layout/dashboard.less";

const { Header, Footer, Sider, Content } = Layout;

const Dashboard: FunctionComponent = ({ children }) => {
	const [menuCollapsed, setMenuCollapsed] = useState(false);

	const toggleMenu = useCallback(() => {
		setMenuCollapsed(state => !state);
	}, []);

	return (
		<Layout id="dashboard-layout">
			<Sider
				trigger={null}
				collapsible
				collapsed={menuCollapsed}
				className="sider"
			>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						nav 1
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout id="page-content">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(
						menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: toggleMenu
						}
					)}
				</Header>
				<Content>{children}</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
