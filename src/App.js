import "./App.css";
<<<<<<< HEAD
import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="App">
      <TabComponent />
    </div>
=======
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
>>>>>>> 4bc7bd25e31447fd7d22b057e242db955bfaf648
  );
}

export default App;
//<Route path=":restaurantName" element={<RestaurantDetails />} />
