import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import "./assets/css/main.css";
import CategoryPage from './CategoryPage';
import RestaurantPage from './RestaurantPage';

function App() {
  const userName = 'hala'; 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage userName={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
