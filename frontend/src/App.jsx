import React from 'react'
import './i18n'
import { useTranslation } from 'react-i18next'

import logo from './assets/logotipo-principal.png'

// 🔹 Imagens do slideshow
import hero1 from './assets/hero/vela.flor.secas.png'
import hero2 from './assets/hero/classic.limonade.png'
import hero3 from './assets/hero/classic.cabine2.png'
import hero4 from './assets/hero/maca.toalhas.vela.petalas.rosas.secas.jpg'
import hero5 from './assets/hero/sillas.mesa.centro.revista.vogue2.jpg'
import hero6 from './assets/hero/vogue.revista.flore.secas.jpg'
import hero7 from './assets/hero/2sillas.flores.secas.jpg'
import hero8 from './assets/hero/2sillas.mesa.centro.jpg'
import hero9 from './assets/hero/mesa.centro.jpg'

const calendly = 'https://calendly.com/classicestheticsspa'

export default function App() {
  const { t, i18n } = useTranslation()

  // 🔹 Trocar idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // 🔹 Slideshow de imagens
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9]
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div>
      {/* 🔹 Cabeçalho */}
      <header
        className="header container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div className="logo" onClick={() => (window.location.href = '/')}>
          <img src={logo} alt="logo" style={{ height: 60 }} />
        </div>

        <nav className="nav" style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('services.title')}
          </button>

          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('contact')}
          </button>

          {/* 🔹 Botões de idioma */}
          <div style={{ display: 'flex', gap: 6, marginLeft: 10 }}>
            <button onClick={() => changeLanguage('es')}>🇪🇸</button>
            <button onClick={() => changeLanguage('pt-br')}>🇧🇷</button>
            <button onClick={() => changeLanguage('en-us')}>🇺🇸</button>
          </div>
        </nav>
      </header>

      {/* 🔹 Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="overlay" />
        <div className="content">
          <h1 style={{ fontSize: 60, color: '#fff', lineHeight: 1.1 }}>
            Classic
            <br />
            <span style={{ fontSize: 36 }}>Esthetics & </span>
          </h1>
          <p style={{ color: '#fff', maxWidth: 700, margin: '12px auto' }}>
            {t('welcome')}
          </p>
          <button className="btn" onClick={() => (window.location.href = calendly)}>
            {t('reserve')}
          </button>
        </div>
      </section>

      {/* 🔹 Serviços */}
      <section id="services" className="container" style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
          {t('services.title')} - Classic Esthetics & Spa
        </h2>

        {/*  Facial */}
        <h3
  style={{
    marginTop: 40,
    color: '#554037',
    textAlign: 'center',   // centraliza no meio
    fontSize: 24,
    fontWeight: 600,
  }}
>
  {t('services.facial.category')}
</h3>

        {['classicCleaning', 'classicHydration', 'hydraGloss', 'liftingEyelashes'].map((key) => (
          <div className="service" key={key}>
            <h4>{t(`services.facial.${key}.title`)}</h4>
            <p>{t(`services.facial.${key}.description`)}</p>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  'https://calendly.com/classicestheticsspa',
                  '_blank'
                )
              }
            >
              {t(`services.facial.${key}.button`)}
            </button>
          </div>
        ))}

        {/*  Massagens */}
        <h3
  style={{
    marginTop: 40,
    color: '#554037',
    textAlign: 'center',   // centraliza no meio
    fontSize: 24,
    fontWeight: 600,
  }}
>
  {t('services.massage.category')}
</h3>
        {['relaxing', 'facialLifting', 'lymphaticDrainage', 'footSpa'].map((key) => (
          <div className="service" key={key}>
            <h4>{t(`services.massage.${key}.title`)}</h4>
            <p>{t(`services.massage.${key}.description`)}</p>
            <button
              className="btn"
              onClick={() =>
                window.open('https://calendly.com/classicestheticsspa', '_blank')
              }
            >
              {t(`services.massage.${key}.button`)}
            </button>
          </div>
        ))}

        {/*  Corporais */}
        <h3
  style={{
    marginTop: 40,
    color: '#554037',
    textAlign: 'center',   // centraliza no meio
    fontSize: 24,
    fontWeight: 600,
  }}
>
  {t('services.body.category')}
</h3>
        {['magicSculpt', 'classicSPA', 'peelingHydration'].map((key) => (
          <div className="service" key={key}>
            <h4>{t(`services.body.${key}.title`)}</h4>
            <p>{t(`services.body.${key}.description`)}</p>
            <button
              className="btn"
              onClick={() =>
                window.open('https://calendly.com/classicestheticsspa', '_blank')
              }
            >
              {t(`services.body.${key}.button`)}
            </button>
          </div>
        ))}

        <p
          style={{
            marginTop: 40,
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#7a5c48'
          }}
        >
          {t('services.note')}
        </p>
      </section>

      {/* 🔹 Rodapé */}
      <footer id="contact">
        <div className="container">
          <strong>Classic Esthetics & Spa</strong>
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Sant+Marc+1,+local+6,+Gràcia,+08012+Barcelona"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#f9f6ec',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Carrer de Sant Marc, 1, local 6, Gràcia, 08012 Barcelona
            </a>
          </div>
        </div>
      </footer>

      {/* 🔹 Botão WhatsApp */}
      <a
        href="https://wa.me/34657881509"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          outline: 'none',
          textDecoration: 'none'
        }}
      >
        <div
          style={{
            background: '#554037',
            color: '#f9f6ec',
            padding: 12,
            borderRadius: 999,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}
        >
          WhatsApp
        </div>
      </a>
    </div>
  )
}
