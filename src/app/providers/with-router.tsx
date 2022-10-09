import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "widgets/cartItem/model/state/store";

export const withRouter = (component: () => React.ReactNode) => () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Suspense fallback="Loading...">
					{component()}
				</Suspense>
			</BrowserRouter>
		</PersistGate>
	</Provider>
);