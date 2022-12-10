import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Waste from "./pages/Waste";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
          <Route path="/Waste" element={<Waste />} />
          <Route path="*" element={<NotFound/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
