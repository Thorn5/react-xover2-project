import "./App.css";
import Sidebar from "./components/Sidebar";
import TabComponent from "./components/TabComponent";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Sidebar />
        <TabComponent />
      </Routes>
    </div>
  );
}

export default App;
