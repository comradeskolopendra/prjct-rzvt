import Header from "../components/header/header";
import { MainPage, AboutProject, LoginPage, RegsiterPage } from "../pages";

import { Route, Routes } from "react-router";

import { routerLinks } from "../router-config";

import "../index.css";

function App() {
	return (
		<div className="app">
			<Header links={routerLinks} />
			<div className="wrapper">
				<Routes>
					<Route path={"/"} index element={<MainPage />} />
					<Route path={"/about-project"} element={<AboutProject />} />
					<Route path={"/auth"}>
						<Route index path={"login"} element={<LoginPage />} />
						<Route path={"register"} element={<RegsiterPage />} />
					</Route>
				</Routes>
			</div>
		</div>
	)
}

export default App;
