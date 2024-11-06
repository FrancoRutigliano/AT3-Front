import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import global_por from './translations/por/global.json'
import faqForLaw_en from './translations/en/faqForLaw.json'
import faqForLaw_es from './translations/es/faqForLaw.json'
import cookiesPolicy_en from './translations/en/cookiesPolicy.json'
import cookiesPolicy_es from './translations/es/cookiesPolicy.json'



import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation:{escapeValue: false},
  lng: "es",
  resources: {
en:{
 global: global_en,
 faqForLaw: faqForLaw_en,
 cookiesPolicy: cookiesPolicy_en
},
es:{
  global: global_es,
   faqForLaw: faqForLaw_es,
 cookiesPolicy: cookiesPolicy_es
},
por:{
  global: global_por,

}
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider  i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)



