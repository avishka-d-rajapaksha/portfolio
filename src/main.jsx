/**
 * Main Entry Point - Avishka D. Rajapaksha Portfolio [cite: 104]
 * --------------------------------------------------------
 * This file initializes the React application, attaching the 
 * "Next Level" UI components to the DOM and applying the 
 * professional dark-industrial design system.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles and Tailwind configuration
import './index.css';

// Main application component containing project galleries and professional status
import App from './App.jsx';

/**
 * Root Rendering Engine
 * Integrates the full-time UoVT B.Tech and Unilever IT Professional 
 * profiles into the browser[cite: 5].
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);