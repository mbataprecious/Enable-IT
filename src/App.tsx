import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";

//style
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <LayoutComponent>
        <Dashboard />
      </LayoutComponent>
      <ToastContainer />
    </div>
  );
}

export default App;
