import React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { wrapper } from "entities/cartItem/model/state/store";
import { Layout } from "widgets/layout";
import "app/styles/index.scss";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const MyApp = ({ Component, ...rest }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={store.__persistor}>
				{() => <Layout>{getLayout(<Component {...props.pageProps} />)}</Layout>}
			</PersistGate>
		</Provider>
	);
};
export default MyApp;
