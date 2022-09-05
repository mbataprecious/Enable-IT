import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import Dashboard from "./pages/Dashboard/Dashboard";

//style
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <LayoutComponent>
        <Dashboard />
      </LayoutComponent>
    </div>
  );
}

export default App;
