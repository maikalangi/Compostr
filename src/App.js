import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}>
          </Route>
          <Route path="/contribute" exact element={<Calculator/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
