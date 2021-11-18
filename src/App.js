import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import PlantForm from './PlantForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Plant App</h1>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/add-plants">Add Plants</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-plants" element={<PlantForm />} />
      </Routes>
    </div>
  );
}

export default App;
