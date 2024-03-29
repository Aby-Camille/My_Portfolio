import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
