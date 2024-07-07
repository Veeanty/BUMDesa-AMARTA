import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BerandaPage from './pages/BerandaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BerandaPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
