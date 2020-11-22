import React, { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RoutePaths } from "../constants/index";

const DashBoard = lazy(() => import("../pages/DashBoard/Index/index"));
const Login = lazy(() => import("../pages/Login/index"));

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={RoutePaths.Dashboard.Index} component={DashBoard} />
				<Route path={RoutePaths.Auth.Index} component={Login} />
			</Switch>
		</BrowserRouter>
	);
};
