import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PageTitleProvider } from "./providers/PageTitleProvider";

import AppRoutes from "./pages/DashBoard/Index/index";

import store, { persistor } from "./redux/index";

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<PageTitleProvider>
					<React.Suspense fallback={<></>}>
						<AppRoutes />
					</React.Suspense>
				</PageTitleProvider>
			</PersistGate>
		</Provider>
	);
}
