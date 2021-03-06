import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friend from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Wekcome to my fancy route Website</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friend></Friend>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
