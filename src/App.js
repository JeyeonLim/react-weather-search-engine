import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="hamburg" />
      </div>
    </div>
  );
}

export default App;
