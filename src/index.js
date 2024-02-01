import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeedbackProvider } from 'hooks/FeedbackContext';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>
);
