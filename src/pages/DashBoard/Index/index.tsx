import React from "react";

import { usePageTitle } from "@/hooks/usePageTitle";
import Dashboard from "@/layout/DashBoard";
import Prolayout from "@/layout/ProLayout/ProLayout";

const DashboardIndex = () => {
	usePageTitle("Dashboard");
	return <Prolayout></Prolayout>;
};

export default DashboardIndex;
