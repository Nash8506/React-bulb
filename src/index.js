import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import './index.css'; // Import any global styles if needed

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your App component */}
  </React.StrictMode>,
  document.getElementById('root') // Render into the root element in your HTML
);
