import React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { wrapper } from "entities/cartItem/model/state/store";
import { Layout } from "widgets/layout";
import "app/styles/index.scss";
import { Router } from "next/router";
import NProgress from "nprogress";
import Preloader from "shared/ui/preloader";

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
	const [loading, setLoading] = React.useState(false);
	
	Router.events.on("routeChangeStart", (e) => {
		if (!e.match(/\/(?=\?)/)) {
			NProgress.start();
			setLoading(true);
		}
	});
	Router.events.on("routeChangeComplete", () => {
		NProgress.done();
		setLoading(false);
	});
	Router.events.on("routeChangeError", () => {
		NProgress.done();
		setLoading(false);
	});

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={store.__persistor}>
				{() => <Layout>{getLayout(loading ? <Preloader height={300}/> : <Component {...props.pageProps} /> )}</Layout>}
			</PersistGate>
		</Provider>
	);
};
export default MyApp;
