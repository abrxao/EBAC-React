
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Forms from './pages/Forms/Forms';
import Answers from './pages/Answers/Answers';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path=""/>
        <Route element={<Forms/>} path="/forms"/>
        <Route element={<Answers/>} path="/answers"/>
      </Routes>
    </Router>
  );
}

export default App;
