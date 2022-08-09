import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
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