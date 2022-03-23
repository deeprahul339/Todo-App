import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import StateMgmt from "./context/StateMgmt";

function App() {
  return (
    <StateMgmt>
      <div className="App">
        <h1> TODO LIST</h1>
        <AddTask />
      </div>
    </StateMgmt>
  );
}

export default App;
