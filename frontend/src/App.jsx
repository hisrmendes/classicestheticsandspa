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
    <strong>Classic Esthetics & Spa</strong>
    <div>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Sant+Marc+1,+local+6,+Gràcia,+08012+Barcelona"
        target="_blank"
        rel="noreferrer"
        style={{
           color: "#f9f6ec",       // cor bege claro
          textDecoration: "none", // sem sublinhado normal
          cursor: "pointer"
        }}
        onMouseEnter={e => e.target.style.textDecoration = "underline"}
        onMouseLeave={e => e.target.style.textDecoration = "none"}
      >
        Carrer de Sant Marc, 1, local 6, Gràcia, 08012 Barcelona
      </a>
    </div>
  </div>
</footer>

      <a href="https://wa.me/34657881509" target="_blank" rel="noreferrer" style={{position:'fixed',right:20,bottom:20}}>
        <div style={{background:'#554037',color:'#f9f6ec',padding:12,borderRadius:999}}>WhatsApp</div>
      </a>
    </div>
  )
}
