import logo from './logo.svg';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contribute" exact element={<Calculator/>}>
          </Route>
        </Routes>
      </Router>
      <BottomNav/>
    </div>
  );
}

export default App;
