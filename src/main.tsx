import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MinimalModeProvider } from './context/MinimalModeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MinimalModeProvider>
      <App />
    </MinimalModeProvider>
  </StrictMode>,
)
