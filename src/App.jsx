import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Beranda from './Beranda';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
}

export default App;
