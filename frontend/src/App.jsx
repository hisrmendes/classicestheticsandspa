import React from 'react'
import { useTranslation } from 'react-i18next'
const logo = '/assets/Logotipo Principal - Classic_Prancheta 1.png'
const heroImg = '/assets/Marca d\'água - Classic-10.png'
const calendly = 'https://calendly.com/classicestheticsspa'
export default function App(){
  const { t } = useTranslation()
  return (
    <div>
      <header className="header container">
        <div className="logo" onClick={()=>window.location.href='/' }><img src={logo} alt="logo"/></div>
        <nav className="nav">
          <button onClick={()=>window.scrollTo(0,document.body.scrollHeight)}>{t('services')}</button>
          <button onClick={()=>window.location.href+'#contact'}>{t('contact')}</button>
        </nav>
      </header>
      <main>
        <section className="hero" style={{backgroundImage:`url(${heroImg})`}}>
          <div className="overlay" />
          <div className="content">
            <h1 style={{fontSize:42,color:'#fff'}}>{t('title')}</h1>
            <p style={{color:'#fff',maxWidth:700,margin:'12px auto'}}>{t('welcome')}</p>
            <button className="btn" onClick={()=>window.location.href=calendly}>{t('reserve')}</button>
          </div>
        </section>
        <section className="container" style={{marginTop:24}}>
          <h2>{t('services')}</h2>
          <p>Servicios destacados y descripción breve...</p>
        </section>
      </main>
      <footer>
        <div className="container">
          <strong>CLASSIC Esthetics & Spa</strong>
          <div><iframe> src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7555315292666!2d2.1532963!3d41.4011152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3f5e8f7597d%3A0xbd3e5e5426c506f2!2sClassic%20Esthetics%20%26%20Spa!5e0!3m2!1spt-BR!2ses!4v1759796694084!5m2!1spt-BR!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"</iframe></div>
        </div>
      </footer>
      <a href="https://wa.me/34657881509" target="_blank" rel="noreferrer" style={{position:'fixed',right:20,bottom:20}}>
        <div style={{background:'#554037',color:'#f9f6ec',padding:12,borderRadius:999}}>WhatsApp</div>
      </a>
    </div>
  )
}
