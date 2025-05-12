import React from 'react';
import ReactDOM from 'react-dom/client';
import SpinningBud from './SpinningBud.jsx';
import SpinningNug from './SpinningNug.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SpinningBud />
      <SpinningNug />
    </div>
  </React.StrictMode>
);
