import "./App.css";
import Sidebar from "./components/Sidebar";
import TabComponent from "./components/TabComponent";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route index element={<TabComponent />} />
      </Routes>
    </div>
  );
}

export default App;
