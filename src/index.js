import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PageLayout from './components/PageLayout/PageLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route element={<PageLayout />}>
        <Route path="/" element={<Home/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
