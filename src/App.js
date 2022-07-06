import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MiniDrawer from "./components/Mini_Drawer/MiniDrawer";
function App() {
  return (
    <div className="App">
      {" "}
      <div className="Secondry">
        {" "}
        <Sidebar />
        <MiniDrawer/>
      </div>
      <div className="main">
        <Appbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
