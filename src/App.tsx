import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/auth" element={ <LoginPage /> } />
      <Route path="/aboutUs" element={ <AboutUs /> } />
    </Routes>
  );
}

export default App;
