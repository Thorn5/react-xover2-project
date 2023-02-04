import "./App.css";
import Sidebar from "./components/Sidebar";
import TabComponent from "./components/TabComponent";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Sidebar />} />
      </Route>
    </Routes>
  );
}

export default App;
