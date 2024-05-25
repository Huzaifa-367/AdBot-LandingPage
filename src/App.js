import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ImageOverview from "./components/ImageOverview";
import TextOverview from "./components/TextOverview";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Refund from "./components/Refund";
import Footer from "./components/Footer";

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Banner />
							<ImageOverview />
							<TextOverview />
							<Pricing />
							<About />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/privacy"
					element={
						<>
							<Header />
							<Privacy />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/terms"
					element={
						<>
							<Header />
							<Terms />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/refund"
					element={
						<>
							<Header />
							<Refund />
							<Footer />
						</>
					}
				></Route>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
  	);
}

export default App;
