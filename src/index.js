import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './components/Search'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search />
    <Footer />
  </React.StrictMode>
);

