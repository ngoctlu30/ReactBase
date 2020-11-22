/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Result, Avatar, Space, Statistic } from "antd";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";

import ProLayout, {
	PageContainer,
	SettingDrawer,
	ProSettings
} from "@ant-design/pro-layout";
import defaultProps from "./defaultProps";

const content = <div>Đây là content</div>;

export default function Layout() {
	const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
		undefined
	);
	const [pathname, setPathname] = useState("/welcome");
	return (
		<div
			id="test-pro-layout"
			style={{
				height: "100vh"
			}}
		>
			<ProLayout
				{...defaultProps}
				location={{
					pathname
				}}
				fixSiderbar
				// eslint-disable-next-line no-console
				onMenuHeaderClick={e => console.log(e)}
				menuItemRender={(item, dom) => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a
						onClick={() => {
							setPathname(item.path || "/welcome");
						}}
					>
						{dom}
					</a>
				)}
				rightContentRender={() => (
					<div>
						<Avatar shape="square" size="small" icon={<UserOutlined />} />
					</div>
				)}
				{...settings}
			>
				<PageContainer
					content={content}
					// tabList={[
					// 	{
					// 		tab: "base",
					// 		key: "base"
					// 	},
					// 	{
					// 		tab: "infor",
					// 		key: "info"
					// 	}
					// ]}
					// extraContent={
					// 	<Space size={24}>
					// 		<Statistic
					// 			title="Feedback"
					// 			value={1128}
					// 			prefix={<LikeOutlined />}
					// 		/>
					// 		<Statistic title="Unmerged" value={93} suffix="/ 100" />
					// 	</Space>
					// }
					// extra={[
					// 	<Button key="3">操作</Button>,
					// 	<Button key="2">操作</Button>,
					// 	<Button key="1" type="primary">
					// 		主操作
					// 	</Button>
					// ]}
					// footer={[
					// 	<Button key="3">重置</Button>,
					// 	<Button key="2" type="primary">
					// 		提交
					// 	</Button>
					// ]}
				>
					<div
						style={{
							minHeight: "100vh"
						}}
					>
						<Result
							status="404"
							style={{
								height: "100%",
								background: "#fff"
							}}
							title="Hello World"
							subTitle="Sorry, you are not authorized to access this page."
							extra={<Button type="primary">Back Home</Button>}
						/>
					</div>
				</PageContainer>
			</ProLayout>
			{/* <SettingDrawer
				getContainer={() => document.getElementById("test-pro-layout")}
				settings={settings}
				onSettingChange={changeSetting => setSetting(changeSetting)}
			/> */}
		</div>
	);
}
