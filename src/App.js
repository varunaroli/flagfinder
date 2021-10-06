import logo from "./logo.svg";
import "./App.css";
import Findflag from "./Findflag";
import Continents from "./continents.json";

function App() {
  return (
    <div className="App">
      <Findflag data={Continents} />
    </div>
  );
}

export default App;
