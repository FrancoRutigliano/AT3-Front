import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import global_en from './translations/en'
// import global_es from './translations/es'
import i18next from 'i18next'

i18next.init({
  interpolation:{escapeValue: false},
  lng: "en",
  resources: {

  }

})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
