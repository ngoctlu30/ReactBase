import React from "react";
import {
	SmileOutlined,
	CrownOutlined,
	TabletOutlined
} from "@ant-design/icons";

const props = {
	route: {
		path: "/",
		routes: [
			{
				path: "/welcome",
				name: "Trang chủ",
				icon: <SmileOutlined />,
				component: "./Welcome"
			},
			{
				path: "/admin",
				name: "Admin",
				icon: <CrownOutlined />,
				access: "canAdmin",
				component: "./Admin",
				routes: [
					{
						path: "/admin/sub-page1",
						name: "Admin Page 1",
						icon: <CrownOutlined />,
						component: "./Welcome"
					},
					{
						path: "/admin/sub-page2",
						name: "Admin page2",
						icon: <CrownOutlined />,
						component: "./Welcome"
					},
					{
						path: "/admin/sub-page3",
						name: "Admi page3",
						icon: <CrownOutlined />,
						component: "./Welcome"
					}
				]
			},
			{
				name: "Danh sách",
				icon: <TabletOutlined />,
				path: "/list",
				component: "./ListTableList",
				routes: [
					{
						path: "/list/sub-page",
						name: "Danh sách  1",
						icon: <CrownOutlined />,
						routes: [
							{
								path: "sub-sub-page1",
								name: "一一级列表页面",
								icon: <CrownOutlined />,
								component: "./Welcome"
							},
							{
								path: "sub-sub-page2",
								name: "一二级列表页面",
								icon: <CrownOutlined />,
								component: "./Welcome"
							},
							{
								path: "sub-sub-page3",
								name: "一三级列表页面",
								icon: <CrownOutlined />,
								component: "./Welcome"
							}
						]
					},
					{
						path: "/list/sub-page2",
						name: "二级列表页面",
						icon: <CrownOutlined />,
						component: "./Welcome"
					},
					{
						path: "/list/sub-page3",
						name: "三级列表页面",
						icon: <CrownOutlined />,
						component: "./Welcome"
					}
				]
			}
		]
	},
	location: {
		pathname: "/"
	}
};
export default props;
