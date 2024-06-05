import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/Header';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup';
import Dashboard from './dashboard/Dashboard'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    
    </>




  );
}

export default App;
