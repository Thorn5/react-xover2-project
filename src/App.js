import "./App.css";
import Sidebar from "./components/Sidebar";
import BasicTabs from "./components/TabComponent";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
