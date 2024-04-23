import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/home/Header/Header";

function App() {
  return (
    <div className="max-w-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
