import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// importa os arquivos de tradução
import es from './locales/es.json'
import pt from './locales/pt-br.json'
import en from './locales/en-us.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
  es: { translation: es },
  'pt-BR': { translation: pt },
  'en-US': { translation: en },
},
    lng: 'es', // idioma padrão (Espanhol)
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
