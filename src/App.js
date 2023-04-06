import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IntervalFetch from './pages/IntervalFetch';

export default function App() {
  return (
    <Router>
      <IntervalFetch />
    </Router>
  );
}
