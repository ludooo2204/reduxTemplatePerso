import "./App.css";
import React from "react";
import Main from "./Components/main/Main";
// import Blog from "./Components/Blog";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<Main />
			{/* <Blog /> */}
		</Provider>
	);
}

export default App;
