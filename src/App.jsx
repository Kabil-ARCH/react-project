import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Customer from "./pages/Customer";
import Inventory from "./pages/Inventory";
import Items from "./pages/Items";
import Orders from "./pages/Orders";
import NavBar from "./pages/NavBar";
import "./index.css";
import OrderContext from "./components/context/OrderContext";
import MenuContext from "./components/context/MenuContext";
function App() {
	return (
		<>
			<Router>
			  <OrderContext>
			    <MenuContext>
				<div className="base">
					<NavBar className="nav" />
					<div className="routed">
						<Routes>
							<Route path="/" element={<Sales />} />
							<Route path="/dashboard" element={<Dashboard />} />

							<Route path="/Alerts" element={<Alerts />} />
							<Route path="/Customer" element={<Customer />} />
							<Route path="/Inventory" element={<Inventory />} />
							<Route path="/Items" element={<Items />} />
							<Route path="/Orders" element={<Orders />} />
						</Routes>
					</div>


				</div>
			      </MenuContext>
			    </OrderContext>
			</Router>

		</>
	);
}

export default App;
