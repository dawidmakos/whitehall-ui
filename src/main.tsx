import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>whitehall-ui</h1>
      <p>
        Run <code>npm run storybook</code> to view components.
      </p>
    </div>
  </StrictMode>,
);
