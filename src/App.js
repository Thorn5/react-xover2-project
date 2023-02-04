import "./App.css";
import Sidebar from "./components/Sidebar";
import BasicTabs from "./components/TabComponent";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Sidebar} />
    </BrowserRouter>
  );
}

export default App;
