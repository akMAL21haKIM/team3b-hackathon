import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Discover from "./Components/Discover";
import Details from "./Components/Details/details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />
        } />
          <Route path="/discover" element={<Discover />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>     
    </div>

  );
}

export default App;
