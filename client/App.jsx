import React from 'react';
import Mainpage from './components/MainPage';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Mainpage/>
    </div>
  );
}
